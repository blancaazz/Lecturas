

// @Injectable()
// export class LoggerMiddleware {
//   use(req, res, next) {
//     console.log("Request ...");
//     next();
//   }
// }

export function logger(req, res, next){
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
};
