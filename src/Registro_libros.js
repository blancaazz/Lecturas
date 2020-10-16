const Libro = require("./Libro.js");

class Registro_libros{


    constructor(){
        this.libros = new Array();
    }

    registrarLibro(nombre, autora, comentario, puntuacion){
        var libro = new Libro(nombre, autora, comentario, puntuacion);
        this.libros.push(libro);
    }
    
    mostrarInformacion(nombre_libro){
        var libro = this.libros.find(nombre => nombre_libro)
        //console.log(libro.getNombre());
        return libro.as_string();
    }
}

r = new Registro_libros();
r.registrarLibro("hehe", "hihi", "hhf", "e");
r.mostrarInformacion("hehe");