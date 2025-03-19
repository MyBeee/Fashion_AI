import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // ✅ Bearer 토큰에서 JWT 추출
      ignoreExpiration: false, // ✅ 만료된 토큰 거부
      secretOrKey: configService.get<string>('JWT_SECRET') || 'mysecretkey', // ✅ .env의 JWT_SECRET 사용
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email }; // ✅ JWT의 payload에서 유저 정보 추출
  }
}
