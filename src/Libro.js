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


}


module.exports = Libro;



    
