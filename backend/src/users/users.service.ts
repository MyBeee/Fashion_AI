import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // ✅ 이메일로 사용자 찾기
  async findUserByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { email } });
  }

  // ✅ ID로 사용자 찾기
  async findUserById(id: number): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id } });
  }

  // ✅ 사용자 생성 (회원가입)
  async createUser(name: string, email: string, password: string): Promise<User> {
    const newUser = this.userRepository.create({ name, email, password });
    return await this.userRepository.save(newUser);
  }

  // ✅ 사용자 삭제
  async deleteUser(userId: number): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('사용자를 찾을 수 없습니다.');
    }
    await this.userRepository.remove(user);
  }

  // ✅ 비밀번호 변경
  async updateUserPassword(userId: number, hashedPassword: string): Promise<void> {
    const user = await this.findUserById(userId);
    if (!user) {
      throw new NotFoundException('사용자를 찾을 수 없습니다.');
    }
    user.password = hashedPassword;
    await this.userRepository.save(user);
  }
}
