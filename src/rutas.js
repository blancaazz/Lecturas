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

app.post("/registro/libro/:nombre/:autora/:comentario/:puntuacion", function(req, res){
    var id = req.params.nombre + "-" + req.params.autora;
    id = id.replace(/ /g, "");
    var libro = new Libro(req.params.id, req.params.nombre, req.params.autora, req.params.comentario, req.params.puntuacion);
    registro.registrarLibro(libro);
    res.status(200).send(libro)
})

//app.route("/registro/libro")

module.exports = app;