const Registro_libros = require("../src/Registro_libros.js");
const datos = require("./datos.js")

module.exports = (req, res) => {
    registro = datos.crearRegistro();
    var nombre = req.query.nombre;
    var libro = registro.getLibro(nombre);
    if (libro == undefined){
        res.send({error: "No se ha introducido correctamente"})
    }
    res.send(libro);    
}
