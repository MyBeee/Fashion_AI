import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';  // ✅ 상대 경로로 올바르게 되어 있어야 함
import { config } from 'dotenv';
config();  // ✅ 환경 변수 강제 로드

console.log('Loaded ENV:', process.env);  // ✅ 디버깅용 로그 추가

async function bootstrap() {
  console.log('Loaded ENV:', process.env);
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
