import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUser(email: string, password: string): Promise<boolean> {
    // TODO: 실제 사용자 인증 로직 추가
    return true;
  }
}
