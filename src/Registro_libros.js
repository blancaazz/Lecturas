const Libro = require("./Libro.js");

class Registro_libros{
    

    constructor(){
        this.libros = new Array();
    }

    //Corresponde a la hu1
    registrarLibro(libro){
        if(libro instanceof Libro){
            this.libros.push(libro);
        }
    }
    
    //Corresponde a la hu2
    /*Dado el nombre de un libro devolvemos la información sobre ese libro*/
    mostrarInformacion(nombre_libro){
        var libro = this.libros.find(nombre => nombre_libro)
    //  console.log(libro.getNombre());
        return libro.as_string();
    }


    //funciones a parte:

    getUltimoLibro(){
        var long = this.libros.length;
        if(long > 0){
            return this.libros[long - 1].as_string();
        }
    }

    as_string(){
        var resultado = "";
        var l;/*
        for (l in this.libros){
            resultado += this.libros[l].as_string();
        }*/
        var long = this.libros.length;
        for(var i = 0; i < long; i++){
            resultado += this.libros[i].as_string();
        }
        return resultado;
    }
}

module.exports = Registro_libros;
