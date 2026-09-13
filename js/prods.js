function produtos(escolha){ //Usado em index.html para escolher o animal
    var urlPad = window.location.href+"produtos.html"
    var urlMod = new URL(urlPad);
    urlMod.searchParams.set("animal", escolha);
    window.location.href = urlMod.href;
} 

function retornaInicio(){
    window.location.href = "../"
}
window.addEventListener("DOMContentLoaded", () =>{ //Usa o valor na url para mandar o animal para a função de escolha quando a pagina é carregada
    const url = new URLSearchParams(window.location.search);
    escolhe(url.get('animal'));
})

function escolhe(Animal){// Escolhe a categoria(animal) de produtos a serem mostrados
    if(Animal != 'todos'){
        const botao = document.getElementById(Animal);
        if(botao.classList.contains('active')){
            botao.classList.remove('active');    
        }else{
            botao.classList.add('active'); 
        }  
        }
    console.log(Animal);
    ativados = document.querySelectorAll('.active');
    ativados.forEach(element => {
        if(element.id != Animal){
            element.classList.remove('active'); 
        }
    });
}