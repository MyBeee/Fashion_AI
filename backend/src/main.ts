import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';  // ✅ 상대 경로로 올바르게 되어 있어야 함

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
