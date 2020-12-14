const Registro_libros = require("../src/Registro_libros.js");
const datos = require("./datos.js")

module.exports = (req, res) => {
    registro = datos.crearRegistro();
    console.log(registro.mostrarInformacion())
    res.send(registro)
}

