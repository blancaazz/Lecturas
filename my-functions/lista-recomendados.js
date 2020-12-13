const fdatos = require("./funciones_datos")


exports.handler = async function(event, context){
    var resultado = [];
    var estado = 200;
    
    var nombre = event.queryStringParameters.nombre;
    var genero = event.queryStringParameters.genero;
    
    //Vamos a ver si la petición tiene el parámetro nombre
    if(nombre != undefined){
        var indice = fdatos.lista_nombres().indexOf(nombre);
        
        if(nombre == "all"){
            resultado = fdatos.todo();
        }

        //No está el libro en la base de datos
        else if(indice == -1){
            resultado = "No existe ese libro"
            estado = 404;
        }

        //el libro sí está 
        else{
            resultado = fdatos.info_libro(indice);
        }
    }

    else if(genero != undefined){
        var lista_generos = fdatos.lista_generos();
        var indice = lista_generos;
        
        if(genero == "list"){
            resultado = lista_generos;
        }
        else if(genero == "all"){
            resultado = fdatos.lista_nombres();
        }
        
        else if(indice == -1){
            resultado = "No existen libros de ese género";
        }
        
        else{
            resultado = fdatos.filtro_genero(genero);
        }

    }
    //Si no lo tiene vamos a devolver una lista con los nombre de cada libro
    else{
        resultado = fdatos.lista_nombres();
    }

    return{
        statusCode: estado,
        body: resultado.toString()
    };

}