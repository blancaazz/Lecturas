import { NestFactory } from '@nestjs/core';
import { Logger } from '../node_modules/@nestjs/common/services/logger.service';
import { AppModule } from './app.module';
import { logger } from "./logger.middleware";



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  await app.listen(3000);

}
bootstrap();

//para testear

