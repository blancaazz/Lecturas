# Nest.js
 
Primero lo que he hecho ha sido un git clone de la opción que pone los ficheros con js y he creado un projecto llamado lect-nest-api, pero da un error de incompatibilidad, así que lo he creado con el comando: nest n -l js "nest-api"   

Nest tiene dos maneras de gestionar las respuestas, yo he usado la Standard, la cual convierte automáticamente a JSON la respuesta cuando es un objeto o un array. También importante es que el código de estado por defecto es 200 (se cambia añadiendo @HttpCode(...) decorador), menos cuando es un POST, que es 201.   

He implementado el [controlador](../nest-api/src/registro/registro.controller.js), [servicio](../nest-api/src/registro/registro.service.js)y [módulo](../nest-api/src/registro/registro.module.js) del registro. Dentro de la carpeta también he añadido la clase libro (el id va a tener el valor del "nombre del libro"-"nombre del autora".)

    
Las rutas diseñadas han sido: 

- /registro/libros: correspondiente a la historia de usuaria 3, que devuelve una lista con todos los libros registrados.

```
    @Get("libros")
    devolverTodo(){
        return this.registroService.listaLibros();
    }

```
Siendo la función listaLibros()

```
    listaLibros(){
        return this.libros
    }    
```


- /registro/libro/:nombre/:autora/:comentario/:puntuacion

```
    @Post("libro/:nombre/:autora/:comentario/:puntuacion")
    @Bind(Param())
    registrarLibro(params){
        //para crear un id único vamos a usar el nombre y la autora:
        var id = params.nombre + "-" + params.autora;
        id = id.replace(/ /g, "");
        var libro = new Libro(id, params.nombre, params.autora, params.comentario, params.puntuacion);

        this.registroService.registrarLibro(libro);
        return libro
    }
```
siendo la función registrarLibro

```
    registrarLibro(libro){
        if(libro instanceof Libro){
            var num = this.libros.indexOf(libro);
                if(num == -1){
                this.libros.push(libro);
            }           
        }
    }
```


- /registro/libro/:id

```
    @Get("libro/:id")
    @Bind(Param())
    devolverLibro(params){
        return this.registroService.getLibro(params.id)
    }
```
siendo la función getLibro

```
    getLibro(id){
        var libro = this.libros.find(libroA => libroA.id === id)
        return libro;
    }

```


- /registro/libro/:id

```
    @Delete("libro/:id")
    @Bind(Param())
    borrarLibro(params){
        this.registroService.borrarLibro(params.id)
    }
```

siendo la función borrar Libro

```
    borrarLibro(id){
        var libro = this.getLibro(id)
        if(libro instanceof Libro){
            var num = this.libros.indexOf(libro);
            if(num != -1 && this.libros.length > 0){
                this.libros.splice(num, 1);
            }
        }
    }
}
```

Como se ve, se utiliza una clase controladora que llama a una clase servicio para desacoplar las diferentes capas. En la capa controladora se recibe y devuelven las peticiones, pero ésta, internamente, llama a la clase servicio que gestiona el tratamiento de los datos. (En este caso, utilizo variables para este hito pero la idea sería diseñar el acceso a una base de datos).    
También es interesante el uso del decorador @Injectable(), ya que permite el uso de la inyección de dependencias. El hecho de que tenga módulos, permite también organizar las dependencias necesarias para cada uno.    
Podía haber sido interesante usar otras cosas como validaciones de clase o usar TypeScript en vez de JavaScript.


## Test con nestjs

Primero instalamos npm i --save-dev @nestjs/testing.
Este paquete provee una clase llamada Test que facilita el proceso de testeo. Y también voy a usar la biblioteca Supertest.   
Nest directamente crea un fichero de test por cada controlador o servicio añadido. Para que funcione el controlador hay que tener en cuenta la inyección de dependencias y añadirle "providers: [RegistroService]" al crear el test. (los test unitarios están usando jest)

- npm run test -> para los unit test
- npm run test:e2e -> para end-to-end testing

Para los e2e en la aplicación principal he tenido que cambir import request from supertest (sino da error).         
He implementado las funciones para el test en el siguiente fichero: [registro.e2e.spec](../nest-api/test/registro.e2e-spec.js), ahí se comprueba todas las rutas previamente diseñadas.


## Middleware con nestjs

He creado un fichero [logger.middleware.js](../nest-api/src/logger.middleware.js) donde programar la función para la parte de log.    
En Nest se puede crear una clase o una función pero la clase me ha dado problemas, así que he optado por hacer una función y hacerla global, es decir, que se haga para todo los requests (se añade a la aplicación en el main mediante app.use(logger))    
También hay una clase llamaa Logger en nest con lo que se pueden especificar mejor y más las opciones, pero he optado por hacer esta manera más sencilla.

```
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
```
    
También quería aprovechar que estaba usando Nest para generar la documentación ya que tiene un [módulo](https://github.com/nestjs/swagger) que facilita documentar las api. Pero me he dado cuenta que, por lo visto, solo permite esa funcionalidad con TypeScript y no con JavaScript.   

Habiendo hecho todo esto con Nest me he dado cuenta de que es una herramienta potente, que igual se aprovecharía más usando TypeScrit y funcionalidades más avanzadas. Para lo que yo necesito en mi proyecto me parece demasiado, así que voy a documentar ahora la solución con Express.
