class Libro{

    constructor(nombre, autora, comentario, puntuacion){
        this.nombre = nombre;
        this.autora = autora;
        this.comentario = comentario;
        this.puntuacion = puntuacion;
    }


    getNombre(){
        return this.nombre;
    }
    getAutora(){
        return this.autora;
    }
    getComentario(){
        return this.comentario;
    }
    getPuntuacion(){
        return this.puntuacion;
    }




    as_string(){
        if(this != "undefined"){
            return this.nombre + " - " + this.autora + " - " + this.comentario + " - " + this.puntuacion;
        }
        else{
            return "undefined";
        }
    }


    //funciones auxiliares para devolver JSON
    
    getObjeto(){
        var libro = {
            "nombre": this.nombre,
            "autora": this.autora,
            "comentario": this.comentario,
            "puntuacion": this.puntuacion
        };
        return libro;
    }
    getJSON(){
        var libro = {
            "nombre": this.nombre,
            "autora": this.autora,
            "comentario": this.comentario,
            "puntuacion": this.puntuacion
        };
        var libro_json = JSON.stringify(libro);
        return libro_json;
    }
}


module.exports = Libro;



    
