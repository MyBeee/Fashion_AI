import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module'; // ✅ UsersModule 추가
import { AuthModule } from './auth/auth.module';   // ✅ AuthModule 추가
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    UsersModule, // ✅ 추가해야 UserRepository 사용 가능
    AuthModule,  // ✅ AuthModule 추가하여 로그인 & 회원가입 가능
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
