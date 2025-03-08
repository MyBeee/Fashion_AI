import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from '../entities/user.entity'; // <-- 엔터티 등록

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME', 'nest_user'),
        password: configService.get<string>('DB_PASSWORD', '5584'),
        database: configService.get<string>('DB_NAME', 'nest_project'),
        entities: [User], // ✅ 엔티티 포함 확인
        autoLoadEntities: true, // ✅ 자동 로드 활성화
        synchronize: true, // ✅ 테이블 자동 생성 활성화
        logging: true, // ✅ SQL 실행 로그 출력 (디버깅 용)
      }),
    }),
  ],
})
export class DatabaseModule {}
