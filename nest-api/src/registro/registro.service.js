import { Injectable } from '@nestjs/common';
var Libro = require ("./Libro.js");

@Injectable()
export class RegistroService {
    constructor(){
        this.libros = new Array();
    }

    //Corresponde a la hu3
    /*Devuelve todos los libros*/
    listaLibros(){
        return this.libros
    }    

    //Corresponde a la hu1
    registrarLibro(libro){
        if(libro instanceof Libro){
            var num = this.libros.indexOf(libro);
                if(num == -1){
                this.libros.push(libro);
            }           
        }
    }

}
