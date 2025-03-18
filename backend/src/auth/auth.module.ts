import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module'; // ✅ UsersModule을 가져옴
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [UsersModule], // ✅ UsersModule이 있어야 UserService를 사용할 수 있음
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
