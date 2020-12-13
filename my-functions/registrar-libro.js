const Registro_libros = require("../src/Registro_libros.js");
const Libro = require("../src/Libro");
const datos = require("./datos.js")

const data = require("./data.js");

const libro_ceguera = new Libro("Ensayo sobre la ceguera", "Saramago", "Ha sido una lectura interesante y reflexiva", 8);

exports.handler = async function(event, context){

    var registro = new Registro_libros;
    
    for (i in data.data.libros){
        const libro = data.data.libros[i]
        const nombre = libro.nombre;
        const autora = libro.autora;
        const comentario = libro.comentario;
        const puntuacion = libro.puntuacion;
        registro.registrarLibro(new Libro(nombre, autora, comentario, puntuacion));        
    }

    //registramos ahora el libro que queremos:
    registro.registrarLibro(libro_ceguera);

    //guardamos el registro
    data.data = registro;
    return{
        statusCode: 200,
        body: JSON.stringify({"mensaje": "Se ha agregado correctamente"})
    }
}