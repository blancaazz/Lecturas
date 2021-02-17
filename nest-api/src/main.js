import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from "./logger.middleware";

import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"



async function bootstrap() {
  try{
    const app = await NestFactory.create(AppModule);

    // No funciona con JavaScript, tiene que ser con TypeScript
    // const config = new DocumentBuilder()
    //   .setTitle("Registro de libros")
    //   .setDescription("API de la aplicación Lecturas")
    //   .setVersion("1.0")
    //   .addTag("libros")
    //   .build();

    // const document = SwaggerModule.createDocument(app, config)
    // SwaggerModule.setup("api", app, document)
    
    app.use(logger);
    await app.listen(3000);
  }catch(e){
    console.log("Error " + e);
  }

}
bootstrap();

//para testear

