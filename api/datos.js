const Registro_libros = require("../src/Registro_libros.js");
const Libro = require("../src/Libro.js");

function crearRegistro(){
    const libro_momo = new Libro("Momo", "Michael Ende", "Me ha gustado mucho", 8);
    const datos_momo = "Momo - Michael Ende - Me ha gustado mucho - 8";
   
    const libro_habitacion = new Libro("Una habitación propia", "Virginia Woolf", "Me ha parecido muy interesante", 8);
    const datos_habitacion = "Una habitación propia - Virginia Woolf - Me ha parecido muy interesante - 8";
   
    const libro_ceguera = new Libro("Ensayo sobre la ceguera", "Saramago", "Ha sido una lectura interesante y reflexiva", 9);


    const nombre_momo = "Momo";
    const nombre_habitacion = "Una habitación propia";
    const nombre_ceguera = "Ensayo sobre la ceguera"

    var registro = new Registro_libros();


    registro.registrarLibro(libro_momo);
    registro.registrarLibro(libro_habitacion);
    registro.registrarLibro(libro_ceguera);
    return registro;
}

exports.crearRegistro = crearRegistro;
