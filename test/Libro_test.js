var Libro = require("../src/Libro.js")
const assert = require("assert");
const { isMainThread } = require("worker_threads");

describe("Libro", function(){
    describe("Carga", function(){
        it("Debería cargarse", function(){
            assert(Libro, "Cargado");
        });
    });


    describe("Crea", function(){
        it("Debería crear un libro", function(){
            var nuevo_libro = new Libro("Momo", "Michael Ende", "Me ha gustado mucho", 8);
            assert.equal(nuevo_libro.as_string(), "Momo - Michael Ende - Me ha gustado mucho - 8", "Creado");
        });
    });
});
/*
var nuevo_libro = new Libro("Momo", "Michael Ende", "Me ha gustado mucho", 8);
assert(nuevo_libro, "Creado Libro");
assert.equal(nuevo_libro.getNombre(), "Momo", "Creado");
assert.equal(nuevo_libro.as_string(), "Momo - Michael Ende - Me ha gustado mucho - 8", "Creado");
console.log("Funciona");
*/