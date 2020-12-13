const Registro_libros = require("../src/Registro_libros.js");
const Libro = require("../src/Libro.js");
var fs = require("fs");

mi_registro = crearRegistro();


function crearRegistro(){
    const libro_momo = new Libro("Momo", "Michael Ende", "Me ha gustado mucho", 8);
    const datos_momo = "Momo - Michael Ende - Me ha gustado mucho - 8";
    const libro_habitacion = new Libro("Una habitación propia", "Virginia Woolf", "Me ha parecido muy interesante", 8);
    const datos_habitacion = "Una habitación propia - Virginia Woolf - Me ha parecido muy interesante - 8";

    const nombre_momo = "Momo";
    const nombre_habitacion = "Una habitación propia";

    var registro = new Registro_libros();


    registro.registrarLibro(libro_momo);
    registro.registrarLibro(libro_habitacion);
    console.log(JSON.stringify(registro));
    

    return registro;
}

exports.crearRegistro = crearRegistro;
exports.mi_registro = mi_registro;
