const { assert } = require("console");
var Registro_libros = require("../src/Registro_libros");
assert = require("assert");

var nuevo_registro = new Registro_libros();
assert(nuevo_registro, "Creado registro");
assert.equal(nuevo_registro.registrarLibro())