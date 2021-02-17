# Express

Primero lo instalamos 
```
npm install express --save
```
Guardándolo en las dependencias.
   
Comentar que hay parte que voy a poder reutilizar de la implmentación hecha previamente con Nest. 


Voy a implementar las mismas historias de usuario que con nest.js, el diseño de las rutas, por lo tanto, va a ser el mismo:
- registro/libro/:id con los métodos get y delete
- registro/libro/:nombre/:autora/:comentario/:puntuacion con el método post
- registro/libros con el método get que devuelve todos los libros

Lo primero que he hecho para desacoplar el acceso a datos con la lógica de negocio es crear la clase [Dator](../src/dator.js). Esta clase será llamada desde [Registro de Libro](../src/Registro_libros.js) para todas las funciones relacionadas con el acceso a datos. Además Dator estará en el constructor del registro. De momento, guardaré los datos en una variable que se va a ir creando y destruyendo cada vez que se lanza el servidor.   
También he separado las rutas en un fichero [rutas.js](../src/rutas.js) y la puesta en marcha del servidor en el fichero [index.js](../src/index.js).   
He hecho algunas modificaciones en las clases Libro y Registro de Libros y en sus respectivos test unitarios para, entre otras cosas, adaptarlo a la inyección de dependencias, añadir id al libro.   

La implementación de las rutas es básicamente:

```

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
```

## Test con Express 

Para los test he reutilizado bastante el código que hice para Nest, pues éste utiliza por debajo express y en ambos estoy usando la biblioteca SuperTest:

```
const request = require("supertest");
const app = require("../src/rutas.js")


describe("Llamadas al registro", function(){

    it("Deberia registrar un libro (Momo)", function(done){
        request(app)
            .post("/registro/libro/Momo/Michael Ende/Ha estado genial/8")
            .expect("Content-Type", /json/)
            .expect(200, {
                id: "Momo-MichaelEnde",
                nombre: "Momo",
                autora: "Michael Ende",
                comentario: "Ha estado genial",
                puntuacion: "8"
            }, done);
    })

    it("Deberia registrar un libro (La historia interminable)", function(done){
        request(app)
            .post("/registro/libro/La historia interminable/Michael Ende/Me ha gustado/7")
            .expect("Content-Type", /json/)
            .expect(200, {
                id: "Lahistoriainterminable-MichaelEnde",
                nombre: "La historia interminable",
                autora: "Michael Ende",
                comentario: "Me ha gustado",
                puntuacion: "7"
            }, done);
    })


    //Correspondientes a la ruta /registro/libros
    //en este caso como solo está registrado Momo, voy a poner que tendría que devolver ese
    it("Debería devolver los libros", function(done){
        request(app)
            .get("/registro/libros")
            .expect("Content-Type", /json/)
            .expect(200, [{
                id: "Momo-MichaelEnde",
                nombre: "Momo",
                autora: "Michael Ende",
                comentario: "Ha estado genial",
                puntuacion: "8"
            }, {
                id: "Lahistoriainterminable-MichaelEnde",
                nombre: "La historia interminable",
                autora: "Michael Ende",
                comentario: "Me ha gustado",
                puntuacion: "7"
            }], done);
    });

    it("No debería devolver los libros (es una ruta inexistente)", function(done){
        request(app)
            .get("/registro/libross")
            .expect(404, done);
    });

    //Correspondientes a la ruta /registro/libro/:id
    it("Deberia devolver información de un libro en función de su id", function(done){
        request(app)
            .get("/registro/libro/Momo-MichaelEnde")
            .expect("Content-Type", /json/)
            .expect(200, {
                id: "Momo-MichaelEnde",
                nombre: "Momo",
                autora: "Michael Ende",
                comentario: "Ha estado genial",
                puntuacion: "8"
            }, done);
    })

    //Correspondientes a la ruta /registro/libro/:id
    it("Deberia borrar el libro de Momo", function(done){
        request(app)
            .delete("/registro/libro/Momo-MichaelEnde")
            .expect(200, done);
    })

    //ahora para comprobar que se ha borrado voy a hacer una nueva llamada
    //a la función que devolvía todos los libros:
    it("Debería devolver los libros", function(done){
        request(app)
            .get("/registro/libros")
            .expect("Content-Type", /json/)
            .expect(200, [{
                id: "Lahistoriainterminable-MichaelEnde",
                nombre: "La historia interminable",
                autora: "Michael Ende",
                comentario: "Me ha gustado",
                puntuacion: "7"
            }], done);
    });    

});
```
Los test se encuentran en este [fichero](../test/Api.js)


## Middleware con Express

Básicamente consiste en añadirle la función 

```
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
```
Y luego app.use(logger) para cargar la función.