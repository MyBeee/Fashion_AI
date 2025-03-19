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
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME', 'postgres'),
        password: configService.get<string>('DB_PASSWORD', '5584'),
        database: configService.get<string>('DB_NAME', 'nest_project'),
        entities: [User],  // ✅ 엔티티 명시적으로 등록
        autoLoadEntities: true, 
        synchronize: true,  // ✅ 자동 테이블 생성 강제 활성화
        logging: true,  // ✅ SQL 로그 활성화
      }),
    }),
  ],
})
export class DatabaseModule {}
