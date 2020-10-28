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

- make tests

Para ejecutar la aplicación:

- make run  

Como gestor de tareas estoy usando make y para los tests mocha.  
- [Makefile](Makefile)
- Para los tests he implementado la clase [Registro_test.js](test/Registro_test.js), dentro del directorio test, de forma que compruebe que se lleven a cabo las dos historias de usuario propuestas.  

Aquí más información sobre las justificación de las [herramientas](docs/herramientas.md).  

## Dockerfile

He creado [este dockerfile](Dockerfile) y la justificación del contenedor base, junto con las buenas prácticas que he llevado a cabo se encuentran en [este documento](docs/justificacion_dockerfile.md).  
Es un contenedor cuya función es testear el código.  

También me he creado una cuenta de DockerHub, la he asociado a mi github y lo he subido la imagen del contenedor a DockerHub. Por lo que para ejecutarlo, simplemente tenemos que bajarnos el repositorio, luego efectuar este comando:
- docker pull blancaazz/lecturas  
Una vez ya tengamos el contenedor, para ejecutarlo y hacer los tests sería: 
- docker run -t -v `pwd`:/test blancaazz/lecturas


## Historias de usuario

[HU1](https://github.com/blancaazz/Lecturas/issues/4) que consiste en registrar un libro  
[HU2](https://github.com/blancaazz/Lecturas/issues/5) que consiste en poder ver la información correspondiente a un libro



## Enlaces de interes

- [Configuración del git](docs/configuracion-git.md)  

- [Descripción de las herramientas](docs/herramientas.md) que voy a usar

- [Pasos](docs/pasos.md) en la realización del projecto