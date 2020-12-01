# Serverless

## Despliegue con Vercel

Ya tengo conectado Vercel a mi cuenta de github. Para las desplegar funciones serverless sin configuración adicional se crea la carpeta api.  
Cada petición da acceso a un objeto request y response. Este último será nuestra respuesta, así que tendremos que asignarle el contenido y estado que queramos.  
Primero voy a probar a implementar la historia de usuario 3, donde hay que resolver que se devuelvan todos los libros que tengamos en el registro. Antes de eso, tengo que decidir de donde voy a tomar esos datos. Para no complicarme mucho y dado que no hace falta que conectemos una base de datos, para un primer acercamiento he creado un fichero que se llama datos.js donde creo un registro con un par de libros. Si luego quisiera añadirle una base de datos he encontrado información en este [enlace](https://vercel.com/docs/solutions/databases). He creado ya una primera función muy básica que te devuelve toda la información. 

```
module.exports = (req, res) => {
    registro = datos.crearRegistro();
    res.send(registro.as_string())
}
```

Sin embargo, la respuesta me la devuelve como una cadena de texto y el hito nos pide que la devuelva en JSON así que mi primera idea fue crear un par de funciones auxiliares en la clase Libro y en la clase Registro para devolver un JSON. Pero a base de prueba y error y estar investigándolo, resulta que cuando hacemos res.send(body), body puede ser un string, un objeto o un Buffer. Cuando hacemos que sea un objeto, al acceder a la página se devuelve como JSON. Otra opción sería hacer res.json(obj). Así que no hace falta que llame a las funciones auxiliares, sino que devolviendo directamente el objeto en la función, aparece como JSON, tal que: res.send(registro);
De esta manera estaría creada ya la primera función correspondiente a la historia de usuaria 3, la cual es bastante sencilla. Así que voy a proceder a realizar otra que incluya el uso de parámentros. Por ejemplo, en mi historia de usuaria quiero resolver el mostrar por pantalla la información correspondiente a un libro. Para ello, debería pasar como parámetro el nombre del libro. 
El código de la función es el siguiente:
```
module.exports = (req, res) => {
    registro = datos.crearRegistro();
    var nombre = req.query.nombre;
    var libro = registro.getLibro(nombre);
    if (libro == undefined){
        res.send({error: "No se ha introducido correctamente"})
    }
    res.send(libro);    
}


```

Primero creamos el registro como antes y luego capturamos el nombre del libro de la url (req.query.nombre) para llamar a la función del registro de libros que nos devuelve el nombre correspondiente (registro.getLibro(nombre)). Si el libro que se llama no existe o no se usa correctamente el parámetro nombre, lo he implementado de manera que devuelva un JSON con un campo de error. 
