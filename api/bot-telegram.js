const datos = require("./datos.js")
const axios = require("axios");


function getBaseUrl(){
    return "https://api.telegram.org/bot" + process.env.TOKEN_TELEGRAM;
}

var TOKEN = "1443881115:AAF2OJ6h-Yoizh998eAsNH9Rr2n6KPPFkiY";

module.exports = (req, res) => {
    var chat_id = req.body["message"]["chat"]["id"]
    var texto = req.body["message"]["text"]
    console.log(chat_id);
    console.log(texto);

    if(texto == "/hola"){
        axios.post("https://api.telegram.org/bot" + TOKEN + "/sendMessage",
        //axios.post("https://api.telegram.org/bot" + process.env.TOKEN_TELEGRAM + "/sendMessage",
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
        registro = datos.crearRegistro();
        axios.post("https://api.telegram.org/bot" + TOKEN + "/sendMessage", 
        //axios.post("https://api.telegram.org/bot" + process.env.TOKEN_TELEGRAM + "/sendMessage", registro)
            {
                chat_id: chat_id,
                text: JSON.stringify(registro)
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
    else if(texto == "/libro"){
        registro = datos.crearRegistro();
        axios.post("https://api.telegram.org/bot" + TOKEN + "/sendMessage", 
        //axios.post("https://api.telegram.org/bot" + process.env.TOKEN_TELEGRAM + "/sendMessage", registro)
            {
                chat_id: chat_id,
                text: "lista de libros",
                reply_markup: [
                    {
                        text: "holi",
                        callback_data : ""
                    },
                    {
                        text: "hadios",
                        callback_data: ""
                    }
                ]
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
    else if(texto == "/help"){

    }
    else{
        res.status(200).send({})
    }

    // var data = {Msg: text,
    //     Method: "sendMesage",
    //     ChatID: chat_id}
    // res.status(200).send(JSON.stringify(data))
}
