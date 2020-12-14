const datos = require("./datos.js")
const axios = require("axios");



//variable del token de telegram --> process.env.TOKEN_TELEGRAM;


//estructura todos los datos de todos los libros 
function ponerBonito(registro){
    resultado = "";
    var libros = registro.listaLibros();
    for (i in libros){
        resultado += ponerBonitoLibro(libros[i]);
        resultado += "\n\n";
    }
    return resultado;
}

//Devuelve una lista con el nombre de cada libro
function listaNombres(registro){
    var lista = registro.listaLibrosNombres();
    var resultado = "";
    for (i in lista){
        resultado += lista[i] + "\n";
    }
    return resultado;
}

//estructura la info de un libro
function ponerBonitoLibro(libro){
    var resultado = "";
    resultado += libro.getNombre() + "\n" + libro.getAutora() + "\nComentario:\n";
    resultado += libro.getComentario() + "\nPuntuación: " + libro.getPuntuacion();
    return resultado;
}



module.exports = (req, res) => {
    var chat_id = req.body["message"]["chat"]["id"]
    var texto = req.body["message"]["text"]

    var registro = datos.crearRegistro();

    if(texto == "/hola"){
        //axios.post("https://api.telegram.org/bot" + TOKEN + "/sendMessage",
        axios.post("https://api.telegram.org/bot" + process.env.TOKEN_TELEGRAM + "/sendMessage",
            {
                chat_id: chat_id,
                text: "Hola!!"
            })
            .then((response) => {
                console.log("Mandando respuesta");
                res.status(200).send(response);
            }).catch((error) => {
        //     console.log(error);
                console.log("Error al mandar respuesta")
                res.send(error);
            });
        }
    else if(texto == "/listalibros"){
        var respuesta = ponerBonito(registro);
        //axios.post("https://api.telegram.org/bot" + TOKEN + "/sendMessage", 
        axios.post("https://api.telegram.org/bot" + process.env.TOKEN_TELEGRAM + "/sendMessage",
            {
                chat_id: chat_id,
                text: respuesta
            })
            .then((response) => {
                console.log("Mandando respuesta");
                res.status(200).send(response);
            }).catch((error) => {
             console.log(error);
                console.log("Error al mandar respuesta")
                res.send(error);
            });
        }
    else if(texto == "/listanombres"){
        var respuesta = listaNombres(registro);

        //axios.post("https://api.telegram.org/bot" + TOKEN + "/sendMessage", 
        axios.post("https://api.telegram.org/bot" + process.env.TOKEN_TELEGRAM + "/sendMessage",
            {
                chat_id: chat_id,
                text: respuesta
            })
            .then((response) => {
                console.log("Mandando respuesta");
                res.status(200).send(response);
            }).catch((error) => {
             console.log(error);
                console.log("Error al mandar respuesta")
                res.send(error);
            });
        }        
    else if(texto.match("/libro *")){
        var nombre = texto.substr(7);
        var libro = registro.getLibro(nombre);
        var respuesta = "";
        if(libro != undefined){
            respuesta = ponerBonitoLibro(libro);
        }
        else{
            respuesta = "No está ese libro";
        }
        //axios.post("https://api.telegram.org/bot" + TOKEN + "/sendMessage", 
        axios.post("https://api.telegram.org/bot" + process.env.TOKEN_TELEGRAM + "/sendMessage",
            {
                chat_id: chat_id,
                text:  respuesta,
            })
            .then((response) => {
                console.log("Mandando respuesta");
                res.status(200).send(response);
            }).catch((error) => {
             console.log(error);
                console.log(error);
                console.log("Error al mandar respuesta")
                res.send(error);
            });
    }
    else{
        res.status(200).send({})
    }

    // var data = {Msg: text,
    //     Method: "sendMesage",
    //     ChatID: chat_id}
    // res.status(200).send(JSON.stringify(data))
}
