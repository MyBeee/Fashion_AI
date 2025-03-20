import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';  // ✅ 엔티티 등록

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'fashion_ai_postgres',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '5584',
    database: process.env.DB_NAME || 'nest_project',
    synchronize: false,  // ✅ 마이그레이션 적용을 위해 반드시 false로 설정
    logging: true,
    entities: [User],  // ✅ 사용 중인 엔티티 추가
    migrations: process.env.NODE_ENV === 'production' 
        ? ['dist/database/migrations/*.js']  // ✅ 프로덕션 환경에서는 JS 파일 사용
        : ['src/database/migrations/*.ts'],  // ✅ 개발 환경에서는 TS 파일 사용
    migrationsRun: true, // ✅ 서버 실행 시 자동 적용
});
