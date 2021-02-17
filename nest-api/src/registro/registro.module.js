import { Module, Dependencies } from '@nestjs/common';
import { RegistroController } from './registro.controller'
import { RegistroService } from './registro.service'

@Module({
    controllers: [RegistroController],
    providers: [RegistroService],
})

@Dependencies(RegistroService)
export class RegistroModule {
    constructor(registroService){
        this.registroService = registroService;
    }
}
