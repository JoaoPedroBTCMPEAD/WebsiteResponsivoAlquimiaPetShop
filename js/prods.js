function produtos(escolha){
    var urlPad = window.location.href+"produtos.html"
    var urlMod = new URL(urlPad);
    urlMod.searchParams.set("animal", escolha);
    window.location.href = urlMod.href;
}

function retornaInicio(){
    window.location.href = "../"
}

function listagemProds(Animal){
    switch(Animal){
        case "todos":{
            
            break;    
        }
        case "cao":{
            
            break;    
        }
        case "gato":{
            
            break;    
        }
        case "ave":{
            
            break;    
        }
        case "roedor":{
            
            break;    
        }
        case "peixe":{
            
            break;    
        }
    }
}