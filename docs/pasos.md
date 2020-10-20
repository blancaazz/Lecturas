# Pasos durante la realización del proyecto

## Semana 3

Primero he cambiado la estructura de clases que tenía antes. He creado una clase Registro de libros, que será la que se encargue de guardar los libros en un array. Este array será de tipo Libro. A la clase Libro le he añadido un par de métodos para mejorar ese funcionamiento.   
Modificado esto, lo siguiente que he hecho ha sido crear el directorio tests y un fichero de test para cada clase que he mencionado previamente. Quiero ejecutarlo dentro del marco de test "Mocha" para ello me he leído la [documentación](https://mochajs.org/#configuring-mocha-nodejs) y he seguido los pasos. He añadido también node_modules al .gitignore.

Una vez visto que los tests funcionan (de momento son un poco básicos, ya luego le añadiré más complejidad), he decidido que voy a usar make como gestor de tareas. Para ello, creo un Makefile con tres órdenes básicas (install, tests, run). 
Esta última ejecutará la clase principal pero como de momento no está muy desarrollada, lo que hará será imprimir por pantalla información sobre un libro y ya está. 

Luego, modifico el iv.yaml para añadir lo que pide el projecto.

He añadido también otra historia de usuario.

Para la historia de usuaria 1 el registro de libros, he hecho los tests teniendo en cuenta que la clase libro es correcta. Por ejemplo, el registro de libros no comprueba si el libro creado ha sido creado de manera correcta (pues pienso que es competencia de los tests sobre la clase libro).