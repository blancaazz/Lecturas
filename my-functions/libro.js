const Registro_libros = require("../src/Registro_libros.js");
const datos = require("./datos.js")


exports.handler = async function(event, context){
    var nombre = event.queryStringParameters.nombre;
    console.log(nombre);
    registro = datos.crearRegistro();
    var libro = registro.getLibro(nombre);
    var contenido;
    if(libro != undefined){
        contenido = JSON.stringify(libro);
        estado = 404;
    }
    else{
        contenido = JSON.stringify({error: "Fallo al buscar libro"});
        estado = 200;
    }
    return {       
        statusCode: estado,
        body: contenido
    }; 
    
}