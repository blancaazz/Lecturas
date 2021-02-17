const express = require("express");
const app = express();
const RegistroLibro = require ("./Registro_libros.js");
const Libro = require("./Libro.js");
const Dator = require("./dator.js")

const dator = new Dator();
const registro = new RegistroLibro(dator);

var logger = function(req, res, next){
    var metodo = req.method;
    var codigo = res.statusCode;
    var url = req.originalUrl;
    var dat_tiempo = new Date();
    let mes = dat_tiempo.getMonth() + 1;
    var año = dat_tiempo.getFullYear();
    var dia = dat_tiempo.getDate();
    var horas = dat_tiempo.getHours();
    var minutos = dat_tiempo.getMinutes();
  
    console.log("Peticion realizada a las " + dia + "-" + mes + "-" + año + " " + horas + ":" + minutos);
    console.log("Url: " + url + " - Método: " + metodo + " -  Código de estado: " + codigo + "")
    next();    
}

//para cargar la función de middleware
app.use(logger)


//rutas

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
    var libro = new Libro(id, req.params.nombre, req.params.autora, req.params.comentario, req.params.puntuacion);
    registro.registrarLibro(libro);
    res.status(200).send(libro)
})

app.route("/registro/libro/:id")
    .get(function(req, res){
        var libro = registro.obtenerLibro(req.params.id);
        if(libro != undefined){
            res.status(200).send(libro)
        }
        else{
            res.status(404).send({"error": "No encontrado el libro"})
        }
    })
    .delete(function(req, res){
        registro.borrarLibroId(req.params.id)
        res.status(200).send({"mensaje": "ok, borrado"})
    });

module.exports = app;