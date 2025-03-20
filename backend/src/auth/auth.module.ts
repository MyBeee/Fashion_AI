import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,  // ✅ 환경변수(.env) 사용 가능하게 설정
    TypeOrmModule.forFeature([User]), // ✅ TypeORM에서 User 엔티티 사용 가능하도록 설정
    PassportModule.register({ defaultStrategy: 'jwt' }), // ✅ JWT 인증 전략 추가
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET') || 'mysecretkey', // ✅ 환경변수에서 JWT_SECRET 가져오기
        signOptions: { expiresIn: '1h' }, // ✅ 토큰 만료시간 1시간
      }),
    }),
    UsersModule,
  ],
  providers: [AuthService, JwtStrategy], // ✅ JWT 전략 추가
  controllers: [AuthController], // ✅ 컨트롤러 등록
  exports: [AuthService, JwtModule], // ✅ AuthService & JwtModule 내보내기
})
export class AuthModule {}
