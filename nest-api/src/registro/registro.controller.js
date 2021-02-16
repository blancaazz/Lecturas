import { Controller, Get, Post, Bind, Param, Dependencies } from '@nestjs/common';
import { RegistroService } from './registro.service.js';
var Libro = require ("./Libro.js");

@Controller('registro')
@Dependencies(RegistroService)
export class RegistroController {
    constructor(registroService){
        this.registroService = registroService;
    }

    //esta ruta corresponde a /registro/libros
    @Get("libros")
    devolverTodo(){
        return this.registroService.listaLibros();
    }


    //esta ruta se corresponde con /registro/libro/Momo/Michael Ende/Genial/8
    @Post("libro/:nombre/:autora/:comentario/:puntuacion")
    @Bind(Param())
    registrarLibro(params){
        //para crear un id único vamos a usar el nombre y la autora:
        var id = params.nombre + "-" + params.autora;
        id = id.replace(/ /g, "");
        var libro = new Libro(id, params.nombre, params.autora, params.comentario, params.puntuacion);

        this.registroService.registrarLibro(libro);
        return libro
    }

    //esta ruta corresponde a /registro/libro
    @Get("libro/:id")
    @Bind(Param())
    devolverLibro(params){
        console.log(params.id)
    }




}
