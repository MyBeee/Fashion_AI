import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // ✅ User 엔티티 포함
  providers: [AuthService],
  controllers: [AuthController], // ✅ 컨트롤러 등록 확인!
  exports: [AuthService],
})
export class AuthModule {}
