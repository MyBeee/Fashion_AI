import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // ✅ 회원가입 기능 (비밀번호 해싱 포함)
  async createUser(name: string, email: string, password: string) {
    // 이메일 중복 검사
    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      return { error: '이미 존재하는 이메일입니다.' };
    }

    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    // 새로운 유저 생성
    const newUser = this.userRepository.create({
      name,
      email,
      password: hashedPassword,  // ✅ 암호화된 비밀번호 저장
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

  // ✅ 로그인 검증 기능 (비밀번호 비교 포함)
  async validateUser(email: string, password: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) return false;

    // 🔒 비밀번호 비교 (bcrypt.compare 사용)
    const isPasswordValid = await bcrypt.compare(password, user.password);
    return isPasswordValid;
  }
}
