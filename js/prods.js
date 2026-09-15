function produtos(escolha){ //Usado em index.html para escolher o animal
    var urlPad = window.location.href+"produtos.html"
    var urlMod = new URL(urlPad);
    urlMod.searchParams.set("animal", escolha);
    window.location.href = urlMod.href;
} 
var listAnimais = 
    [
    'todos'
    ,'cao'
    ,'gato'
    ,'ave'
    ,'roedor'
    ,'peixe'
    ];
var listTitulos = 
    [
    'Produtos para todos'
    ,'Produtos para cães'
    ,'Produtos para gatos'
    ,'Produtos para aves'
    ,'Produtos para roedores'
    ,'Produtos para peixes'
    ];
var presSelec;
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
            Animal ='todos'  
        }else{
            botao.classList.add('active'); 
        }  
    }
    listAnimais.forEach((anm, i) =>{
        if(anm == Animal){
            presSelec = i;
            (document.getElementById('preencher').innerHTML = listTitulos[i])
        }
    })
    console.log(Animal);//Tirar depois do teste
    ativados = document.querySelectorAll('.active');
    ativados.forEach(element => {
        if(element.id != Animal){
            element.classList.remove('active'); 
        }
    });
}