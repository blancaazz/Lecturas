var Libro = require("../src/Libro.js")
const assert = require("assert");

var nuevo_libro = new Libro("Momo", "Michael Ende", "Me ha gustado mucho", 8);
assert(nuevo_libro, "Creado Libro");
assert.equal(nuevo_libro.getNombre(), "Momo", "Creado");
assert.equal(nuevo_libro.as_string(), "Momo - Michael Ende - Me ha gustado mucho - 8", "Creado");
console.log("Funciona");