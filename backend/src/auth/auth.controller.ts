import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // ✅ /auth 경로를 위한 컨트롤러
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    try {
      return await this.authService.login(body.email, body.password); // ✅ 바로 반환
    } catch (error) {
      throw new UnauthorizedException('이메일 또는 비밀번호가 잘못되었습니다.');
    }
  }

  @Post('signup') // ✅ /auth/signup 엔드포인트
  async signup(@Body() body: { name: string; email: string; password: string }) {
    return this.authService.createUser(body.name, body.email, body.password);
  }
}
