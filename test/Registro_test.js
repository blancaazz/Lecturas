var Registro_libro = require("../src/Registro_libros.js")
var Libro = require("../src/Libro.js");
const assert = require("assert");
const { isMainThread } = require("worker_threads");

describe("Registro libro", function(){
    describe("Carga", function(){
        it("Debería cargarse", function(){
            assert(Registro_libro, "Cargado");
        });
    });


    describe("Crea", function(){
        it("Debería crear un registro", function(){
            var nuevo_registro = new Registro_libro();
            var libro = new Libro("Momo", "Michael Ende", "Me ha gustado mucho", 8);
            nuevo_registro.registrarLibro(libro);
            assert.equal(nuevo_registro.mostrarInformacion("Momo"), "Momo - Michael Ende - Me ha gustado mucho - 8", "Creado");
        });
    });
});