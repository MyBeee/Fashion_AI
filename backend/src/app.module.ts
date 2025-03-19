import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';  // ✅ 상대 경로 사용
import { AuthModule } from './auth/auth.module';    // ✅ 상대 경로 사용

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    UsersModule,  // ✅ UserRepository 사용 가능
    AuthModule,   // ✅ 로그인 & 회원가입 기능 사용 가능
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
