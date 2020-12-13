
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

var base = "https://lecturas.netlify.app"


$(document).ready(function(){
     
    var url = base + '/.netlify/functions/lista-recomendados';
    var url2 = base + "/.netlify/functions/lista-recomendados?genero=list"
    console.log("la base es " + base);

    var xhttp = createCORSRequest('GET', url);
    if (!xhttp) {
        throw new Error('CORS not supported');
    }
  
    xhttp.onload = function() {
      
        var text = xhttp.responseText;
      
  
        var myJSON = text;
        $("#Lista").text(myJSON);

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
        var url = base + "/.netlify/functions/lista-recomendados/?genero=" + elemento;

        var xhttp = createCORSRequest('GET', url);
        if (!xhttp) {
            throw new Error('CORS not supported');
        }
      
        xhttp.onload = function() {
          
            var text = xhttp.responseText;

            $("#Lista").text(text);
    
        };
        xhttp.send();
    
      });

  
  });

