var express = require("express")
var app = require("./rutas.js")

const port = 3000;

app.listen(port, () => {
    console.log("Servidor escuchando en http://localhost:" + port)
})