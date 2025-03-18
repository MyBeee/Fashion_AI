import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async findUser(email: string): Promise<boolean> {
    // TODO: 실제 사용자 조회 로직 추가
    return true;
  }
}
