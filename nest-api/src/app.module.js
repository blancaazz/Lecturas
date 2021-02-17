import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistroController } from './registro/registro.controller';
import { RegistroService } from './registro/registro.service';
import { RegistroModule } from './registro/registro.module';

import { logger } from "./logger.middleware";

@Module({
  imports: [RegistroModule],
  controllers: [AppController, RegistroController],
  providers: [AppService, RegistroService],

})

export class AppModule{
}
