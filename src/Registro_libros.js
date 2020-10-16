const Libro = require("./Libro.js");

class Registro_libros{


    constructor(){
        this.libros = new Array();
    }

    registrarLibroDatos(nombre, autora, comentario, puntuacion){
        var libro = new Libro(nombre, autora, comentario, puntuacion);
        this.libros.push(libro);
    }

    registrarLibro(libro){
        if(libro instanceof Libro){
        var l = new Libro(libro.getNombre(), libro.getAutora(), libro.getComentario(), libro.getPuntuacion());
        this.libros.push(l);
        }

        var l = new Libro(libro.nombre, libro.autora, libro.comentario, libro.puntuacion);
        this.libros.push(l);
    }
    
    mostrarInformacion(nombre_libro){
        var libro = this.libros.find(nombre => nombre_libro)
    //  console.log(libro.getNombre());
        return libro.as_string();
    }
}

module.exports = Registro_libros;

r = new Registro_libros();
r.registrarLibroDatos("Momo", "Ende", "Es un buen libro", "8");
console.log(r.mostrarInformacion("Momo"));