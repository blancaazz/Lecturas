const datos = require("./datos.json");


//Devuelve una lista de nombres de libros
function lista_nombres(){
    var resultado = [];
    for (i in datos){
        resultado[i] = datos[i].name
    }
    return resultado;
}

//Devuelve todo el json en una lista
function todo(){
    resultado = [];
    for(i in datos){
        resultado.push(JSON.stringify(datos[i]));
    }
    return resultado;
}

//Devuelve la info de un libro determinado
function info_libro(indice){
    resultado = JSON.stringify(datos[indice]);
    console.log(resultado);
    return resultado;
}

//Devuelve una lista con todo los géneros
function lista_generos(){
    resultado = [];
    for (i in datos){
        for(g in datos[i].literary_genres){
            var genero = datos[i].literary_genres[g];
            if(resultado.indexOf(genero) == -1){
                resultado.push(genero);
            }
        }
    }
    return resultado;
}

//Devuelve el nombre de los libros de un determinado género
function filtro_genero(genero_select){
    resultado = [];
    for (i in datos){
        // for(g in datos[i].literary_genres){
        //     var genero = datos[i].literary_genres[g];
        //     var nombre = datos[i].name;
        //     if(genero == genero_select && resultado.indexOf(nombre) == -1){
        //         resultado.push(genero);
        //     }
        // }
        if (datos[i].literary_genres.indexOf(genero_select) != -1){
            resultado.push(datos[i].name);
        }
    }
    return resultado;
}

exports.lista_nombres = lista_nombres;
exports.todo = todo;
exports.info_libro = info_libro;
exports.lista_generos = lista_generos;
exports.filtro_genero = filtro_genero;