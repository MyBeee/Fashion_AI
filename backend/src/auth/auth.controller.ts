import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const isValid = await this.authService.validateUser(body.email, body.password);
    if (isValid) {
      return { message: '로그인 성공!' };
    } else {
      return { error: '이메일 또는 비밀번호가 잘못되었습니다.' };
    }
  }
}
