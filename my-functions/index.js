
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();

    if ("withCredentials" in xhr) {
  
      // Check if the XMLHttpRequest object has a "withCredentials" property.
      // "withCredentials" only exists on XMLHTTPRequest2 objects.
      xhr.open(method, url, true);
  
    } else if (typeof XDomainRequest != "undefined") {
  
      // Otherwise, check if XDomainRequest.
      // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
      xhr = new XDomainRequest();
      xhr.open(method, url);
  
    } else {
  
      // Otherwise, CORS is not supported by the browser.
      xhr = null;
  
    }
    
    return xhr;

}

//pone la lista de libros en el index.html
function listaLibros(text){
    var lista = text.split(",");
            
    var contenido = '<ul id=Lista class="list-group">';
    for (l in lista){
        contenido += '<li class="list-group-item">' + lista[l] + "</li>"
    }
    contenido += "</ul>"
    $("#Lista").replaceWith(contenido);
}


var base = "https://lecturas.netlify.app"
//var base = "";

$(document).ready(function(){
     
    var url = '/.netlify/functions/lista-recomendados';
    var url2 = "/.netlify/functions/lista-recomendados?genero=list"
    //console.log("la base es " + base);

    var xhttp = createCORSRequest('GET', url);
    if (!xhttp) {
        throw new Error('CORS not supported');
    }
  
    xhttp.onload = function() {
      
        var text = xhttp.responseText;
      
        listaLibros(text);

    };

    //pedimos la lista de géneros
    var xhttp2 = createCORSRequest('GET', url2);
    if (!xhttp2) {
        throw new Error('CORS not supported');
    }
  
    xhttp2.onload = function() {
      
        var texto = xhttp2.responseText;
        var lista = texto.split(",");
        var option = "";
        for(i in lista){        
            option += "<option>" + lista[i] + "</option>";
        }
        $("#inputGenero").append(option);

    };
  
    xhttp.send();
  
    xhttp2.send();





    $("#gbtn").click(function(){

        var elemento = $('#inputGenero').find(":selected").text()
        console.log("Button clicked");
        console.log(elemento);
        var url = "/.netlify/functions/lista-recomendados/?genero=" + elemento;

        var xhttp = createCORSRequest('GET', url);
        if (!xhttp) {
            throw new Error('CORS not supported');
        }
      
        xhttp.onload = function() {
          
            var text = xhttp.responseText;
            
            listaLibros(text);
    
        };
        xhttp.send();
    
      });

  
  });

