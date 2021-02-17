const Libro = require("./Libro.js");

class Registro_libros{
    

    constructor(dator){
        this.dator = dator
        //this.libros = new Array();
    }

    //Corresponde a la hu1
    registrarLibro(libro){
        this.dator.registrarLibro(libro)
    }
    
    //Corresponde a la hu2
    /*Dado el nombre de un libro devolvemos la información sobre ese libro*/
    mostrarInformacion(nombre_libro){    
        return this.dator.mostrarInformacion(nombre_libro);
    }

    //Corresponde a la hu3
    /*Devuelve todos los libros*/
    listaLibros(){
        return this.dator.listaLibros();
    }


    //Corresponde HU6
    /*Devolver una lista con los nombres de todos los libros*/
    listaLibrosNombres(){
        var nombres = [];
        var long = this.libros.length;
        for(var i = 0; i < long; i++){
            nombres.push(this.libros[i].getNombre());
        }
        return nombres;
    }

    //Corresponde a la hu4
    /*Borra el libro que se le pasa
    Se hace teniendo en cuenta que no puede haber libro repetido*/
    borrarLibro(libro){
        this.dator.borrarLibro(libro)
    }

    //funciones a parte:

    //Dado el nombre te devuelve el libro
    getLibro(nombre_libro){
        return this.dator.getLibro(nombre_libro)
    }

    getUltimoLibro(){
        return this.dator.getUltimoLibro();
    }

    as_string(){   
        return this.dator.as_string();
    }


    //funciones auxiliares para devolver JSON

    getObjeto(){
        var registro = new Array();
        var long = this.libros.length;
        for (var i = 0; i < long; i ++){
            registro.push(this.libros[i].getObjeto());
        }
        return registro;

    }

}

module.exports = Registro_libros;
