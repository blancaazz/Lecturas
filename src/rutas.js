const express = require("express");
const app = express();
const RegistroLibro = require ("./Registro_libros.js");
const Libro = require("./Libro.js");
const Dator = require("./dator.js")

const dator = new Dator();
const registro = new RegistroLibro(dator);


app.get("/", function(req, res){
    res.status(200).send("Conexión establecida")
})

app.get("/registro/libros", function(req, res){
    var libros = registro.listaLibros();
    res.status(200).send(libros)
})

//app.route("/registro/libro")

module.exports = app;