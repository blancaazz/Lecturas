const express = require("express");
const app = express();


module.exports = app;

app.get("/", function(req, res){
    res.status(200).send("Conexión establecida")
})