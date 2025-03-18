import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';  // ✅ 여기서 정상적으로 import 되어야 함

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
