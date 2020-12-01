const Libro = require("./Libro.js");

class Registro_libros{
    

    constructor(){
        this.libros = new Array();
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
    
    //Corresponde a la hu2
    /*Dado el nombre de un libro devolvemos la información sobre ese libro*/
    mostrarInformacion(nombre_libro){    
        var libro = this.libros.find(libroA => libroA.nombre === nombre_libro)
        var resultado = "";
        if(libro != undefined){
            resultado = libro.as_string();
        }
        return resultado;
    }

    //Corresponde a la hu3
    /*Devuelve todos los libros*/
    listaLibros(){
        return this.libros
    }

    //Corresponde a la hu4
    /*Borra el libro que se le pasa
    Se hace teniendo en cuenta que no puede haber libro repetido*/
    borrarLibro(libro){
        if(libro instanceof Libro){
            var num = this.libros.indexOf(libro);
            if(num != -1 && this.libros.length > 0){
                this.libros.splice(num, 1);
            }
        }
    }

    //funciones a parte:

    //Dado el nombre te devuelve el libro
    getLibro(nombre_libro){
        var libro = this.libros.find(libroA => libroA.nombre === nombre_libro)
        return libro;
    }

    getUltimoLibro(){
        var long = this.libros.length;
        if(long > 0){
            return this.libros[long - 1].as_string();
        }
    }

    as_string(){
        var resultado = "";
        if(this != undefined){
            var long = this.libros.length;
            for(var i = 0; i < long; i++){
                resultado += this.libros[i].as_string();
            }
        }
        else{
            resultado = "undefined";
        }
        return resultado;
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
