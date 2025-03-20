import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from '../entities/user.entity';  // ✅ User 엔티티 명시적 등록

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'fashion_ai_postgres'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME', 'postgres'),
        password: configService.get<string>('DB_PASSWORD', '5584'),
        database: configService.get<string>('DB_NAME', 'nest_project'),
        entities: [User],  // ✅ 엔티티 명시적으로 등록
        autoLoadEntities: false,  // ✅ 수동 등록 방식이 권장됨
        synchronize: false,  // ✅ 마이그레이션 사용 시 반드시 false 설정
        logging: true,  // ✅ SQL 실행 로그 출력
        migrations: ['dist/database/migrations/*.js'],  // ✅ 마이그레이션 파일 경로
        migrationsRun: true,  // ✅ 앱 실행 시 마이그레이션 자동 실행
      }),
    }),
  ],
})
export class DatabaseModule {}
