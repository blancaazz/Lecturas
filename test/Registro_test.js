var Registro_libro = require("../src/Registro_libros.js")
var Libro = require("../src/Libro.js");
const assert = require("assert");
const { isMainThread } = require("worker_threads");

const libro_momo = new Libro("Momo", "Michael Ende", "Me ha gustado mucho", 8);
const datos_momo = "Momo - Michael Ende - Me ha gustado mucho - 8";
const libro_habitacion = new Libro("Una habitación propia", "Virginia Woolf", "Me ha parecido muy interesante", 8);
const datos_habitacion = "Una habitación propia - Virginia Woolf - Me ha parecido muy interesante - 8";

const nombre_momo = "Momo";
const nombre_habitacion = "Una habitación propia"

var registro = new Registro_libro();
const string_prueba = "Libro de la selva"

describe("Registro libro", function(){
    describe("Carga", function(){
        it("Debería cargarse", function(){
            assert(Registro_libro, "Cargado");
        });
    });


    describe("Crea", function(){
        it("Debería crear un registro", function(){
            var nuevo_registro = new Registro_libro();
            assert.equal(nuevo_registro.as_string(),"" , "Creado");
        });
    });

    //Corresponde a la historia de usuario 1: registrar libro
    describe("Registrar libro (HU1)", function(){
        it("Debería registrar un libro", function(){
            registro.registrarLibro(libro_momo);
            assert.equal(registro.as_string(), datos_momo , "Registrado");
        });
        it("No debería registrar un libro", function(){
            registro.registrarLibro(string_prueba)
            assert.notEqual(registro.as_string(), string_prueba, "No registrado");
        });
        it("Debería egistrar más de un libro", function(){
            registro.registrarLibro(libro_habitacion);
            assert.equal(registro.getUltimoLibro(), datos_habitacion, "Registrado");
        });
        it("No debería registrar el libro", function(){
            registro.registrarLibro(string_prueba);
                assert.notEqual(registro.getUltimoLibro(), string_prueba, "No registrado");
        });
    });

    //Corresponde a la historia de usuaria 2: mostrar información sobre un libro (dado su nombre)
    describe("Mostrar información de un libro (HU2)", function(){
        it("Debería mostrar la informacion del libro 1", function(){
            assert.equal(registro.mostrarInformacion(nombre_momo), datos_momo, "Mostrada correctamente");
        });
        it("Debería mostrar la informacion del libro 2", function(){
            assert.equal(registro.mostrarInformacion(nombre_habitacion), datos_habitacion, "Mostrada correctamente");
        });
        it("No debería mostrar la información", function(){
            assert.notEqual(registro.mostrarInformacion(string_prueba), string_prueba, "No mostrada");
        });
    });

});