import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // ✅ 회원가입 기능
  async createUser(name: string, email: string, password: string) {
    const existingUser = await this.userService.findUserByEmail(email);
    if (existingUser) {
      return { error: '이미 존재하는 이메일입니다.' };
    }

    // 🔒 비밀번호 해싱
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // 사용자 생성
    const newUser = await this.userService.createUser(name, email, hashedPassword);

    return {
      message: '회원가입 성공!',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    };
  }

  // ✅ 로그인 기능
  async login(email: string, password: string) {
    const user = await this.userService.findUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException('이메일 또는 비밀번호가 틀렸습니다.');
    }

    // 🔒 비밀번호 검증
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('이메일 또는 비밀번호가 틀렸습니다.');
    }

    // ✅ JWT 발급
    const payload = { email: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '1h' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    return {
      message: '로그인 성공!',
      access_token: accessToken,
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
    const user = await this.userService.findUserById(userId);
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
    await this.userService.updateUserPassword(userId, hashedPassword);

    return { message: '비밀번호 변경 성공!' };
  }

  // ✅ 사용자 삭제 (회원 탈퇴)
  async deleteUser(userId: number) {
    await this.userService.deleteUser(userId);
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
    const user = await this.userService.findUserById(userId);
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
