import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService, // ✅ JWT 서비스 추가
  ) {}

  // ✅ 회원가입 기능 (비밀번호 해싱 포함)
  async createUser(name: string, email: string, password: string) {
    // 이메일 중복 검사
    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      return { error: '이미 존재하는 이메일입니다.' };
    }

    // 🔒 강력한 해싱 적용 (bcrypt의 saltRounds 증가)
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // 새로운 유저 생성
    const newUser = this.userRepository.create({
      name,
      email,
      password: hashedPassword, // ✅ 암호화된 비밀번호 저장
    });

    await this.userRepository.save(newUser);

    return {
      message: '회원가입 성공!',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    };
  }

  // ✅ 최적화된 로그인 함수
  async login(email: string, password: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('이메일 또는 비밀번호가 틀렸습니다.');
    }

    // 🔒 비밀번호 검증
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('이메일 또는 비밀번호가 틀렸습니다.');
    }

    // ✅ JWT 액세스 토큰 & 리프레시 토큰 발급
    const payload = { email: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '1h' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    // ✅ **응답 구조 수정** (중첩 제거)
    return {
      message: '로그인 성공!',
      access_token: accessToken, // ✅ JWT 토큰을 직접 반환
      refresh_token: refreshToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
  

  // ✅ 비밀번호 변경 기능
  async changePassword(userId: number, oldPassword: string, newPassword: string) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('사용자를 찾을 수 없습니다.');
    }

    // 🔒 기존 비밀번호 확인
    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('현재 비밀번호가 일치하지 않습니다.');
    }

    // ✅ 새로운 비밀번호 암호화 후 저장
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword;
    await this.userRepository.save(user);

    return { message: '비밀번호 변경 성공!' };
  }

  // ✅ 사용자 삭제 (회원 탈퇴)
  async deleteUser(userId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('사용자를 찾을 수 없습니다.');
    }

    await this.userRepository.remove(user);
    return { message: '회원 탈퇴 성공!' };
  }

  // ✅ JWT 검증 및 사용자 정보 가져오기
  async validateToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token);
      return decoded;
    } catch (error) {
      throw new UnauthorizedException('유효하지 않은 토큰입니다.');
    }
  }

  // ✅ 사용자 정보 가져오기
  async getUserById(userId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('사용자를 찾을 수 없습니다.');
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
