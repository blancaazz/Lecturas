# Lecturas
Proyecto de Infraestructura Virtual

## Idea

El asunto  que quiero abarcar es el deseo de registrar los libros que hemos leído junto con nuestras impresiones, notas o mensajes para nuestros yoes del futuro, ¿estaría guay releerlo?, ¿lo recomendarías a alguien?

## Descripción

Para abarcar el problema, voy a diseñar un servicio web que almacene los libros que hemos leído junto a una serie de información acerca de él.  
Para ello, la clase principal creada hasta el momento es un [Registro de libro.js](src/Registro_libros.js). Esta incorporará las funcionalidades de registrar libros, consultarlos y otras que especificaré más adelante. Registro de libros hace uso de otra clase que es la clase [Libro](src/Libro.js).  

[Aquí](https://github.com/blancaazz/Lecturas/milestones?with_issues=no) está el historial de milestone que tiene el projecto ahora mismo  

## Gestor de tareas

Para instalar la aplicación primero habría que descargarse el repositorio y luego desde la terminal ejecutar: 

- make install

Para ejecutar los tests:

- make test

Para ejecutar la aplicación:

- make run  

Como gestor de tareas estoy usando make y para los tests mocha.  
- [Makefile](Makefile)
- Para los tests he implementado la clase [Registro_test.js](test/Registro_test.js), dentro del directorio test, de forma que compruebe que se lleven a cabo las dos historias de usuario propuestas.  

Aquí más información sobre las justificación de las [herramientas](docs/herramientas.md).  

## Dockerfile

He creado [este dockerfile](Dockerfile) y la justificación del contenedor base, junto con las buenas prácticas que he llevado a cabo se encuentran en [este documento](docs/justificacion_dockerfile.md).  
Es un contenedor cuya función es testear el código.  

También me he creado una cuenta de DockerHub, la he asociado a mi github y lo he subido la imagen del contenedor a DockerHub.   
Al conectarlo con mi GitHub, lo he configurado para que cuando hago algún push se actualice automáticamente la imagen de DockerHub.  
Por lo que para ejecutarlo, simplemente tenemos que bajarnos el repositorio, luego efectuar este comando:
- docker pull blancaazz/lecturas  
Una vez ya tengamos el contenedor, para ejecutarlo y hacer los tests sería: 
- docker run -t -v `pwd`:/test blancaazz/lecturas  

He añadido también documentación y justificación sobre el uso de DockerHub y un registro alternativo en el mismo [documento de antes](docs/justificacion_dockerfile.md)

## Integración continua

Para la integración continua he usado travis y shippable, he encontrado problemas en este último pero al final están los dos funcionando. También he adelantado un poco el código añadiendo una nueva historia de usuario con su respectiva implementación y tests.  
Toda la justificación de travis, shippable y resto de avances están descritos [aquí](docs/integracion_continua.md)

## Serverless

Para las funciones serverless he usado Vercel y Netlify. Toda la justificación sobre su configuración y uso están en [este documento](docs/serverless.md).   
He implementado las funciones correspondientes a las historias de usuario 3 (ver la lista de libros guardada) y 2 (ver la información de un libro) con Vercel junto con un bot de Telegram.    
Y he creado dos historias de usuario para cubrir una funcionalidad adicional (ver una lista de libros recomendados y filtrarlos por género literario). Para esto he desplegado una función en netlify y lo he integrado con un front-end.  

## Microservicio

La justifición del framework elegido y el diseño básico de las rutas de la API se encuentran en este [documento](docs/justificacion_ms.md). De manera resumida, decir que he hecho la api con nest.js, y luego, para hacer una comparativa y porque creo que se ajusta más a lo que quiero, la he hecho también con express.    
De modo que la documentación asociada a nest.js se encuentra en el documento [nest_ms](docs/nest_ms.md) y la asociada a express está en el documento [express_ms](docs/express_ms.md)

## Historias de usuario

[HU1](https://github.com/blancaazz/Lecturas/issues/4) que consiste en registrar un libro  
[HU2](https://github.com/blancaazz/Lecturas/issues/5) que consiste en poder ver la información correspondiente a un libro  
[HU3](https://github.com/blancaazz/Lecturas/issues/17) que consiste en ver una lista de libros que se haya guardado  
[HU4](https://github.com/blancaazz/Lecturas/issues/20) que consiste en poder borrar un libro del registro 
[HU5](https://github.com/blancaazz/Lecturas/issues/23) que consiste en obtener una lista de libros ordenados según la puntuación
[HU6](https://github.com/blancaazz/Lecturas/issues/24) que consiste en obtener una lista de libros con únicamente el nombre
[HU7](https://github.com/blancaazz/Lecturas/issues/25) que consiste en obtener una lista de libros recomnedados   
[HU8](https://github.com/blancaazz/Lecturas/issues/26) que consiste en filtrar los libros recomendados por género


## Enlaces de interes

- [Configuración del git](docs/configuracion-git.md)  

- [Descripción de las herramientas](docs/herramientas.md) que voy a usar

- [Pasos](docs/pasos.md) en la realización del projecto