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
        return this.nombre + " - " + this.autora + " - " + this.comentario + " - " + this.puntuacion;
    }

}


module.exports = Libro;



    
