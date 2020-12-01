const Registro_libros = require("../src/Registro_libros.js");
const datos = require("./datos.js")


exports.handler = async function(event, context){
    var nombre = event.queryStringParameters["nombre"];
    console.log(nombre);
    return {        
        body: "creado correctamente"
    }; 
    
}