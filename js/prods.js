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
    const url = new URL(window.location.href)
    const mainURL = `${url.origin}/${url.pathname.split("/")[1]}`;
    console.log(url);
    console.log(mainURL);
    // window.location.href = mainURL;
}
window.addEventListener("DOMContentLoaded", () =>{ //Usa o valor na url para mandar o animal para a função de escolha quando a pagina é carregada
    const url = new URLSearchParams(window.location.search);
    escolhe(url.get('animal'));
})
function btnCateg(btnAtivar){
    if (!btnAtivar.classList.contains('btnAtivado')){
    todosBtn = document.querySelectorAll('.btnCateg');
    todosBtn.forEach(btn => {
        if(btn == btnAtivar){
            btn.classList.add('btnAtivado');
        }else{
            btn.classList.remove('btnAtivado'); 
        }
    })
    }
}

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
    // populateProdGrid(Animal); O animal selecionado sera usado como parametro para quais produtos serao mostrados 
}
const prodsGroup = [
    ["prod_imgs/0.png",
     "Categoria0",
     "titulo0",
     "desc0"
    ],
    ["prod_imgs/1.png",
     "Categoria1",
     "titulo1",
     "desc1"
    ],
    ["prod_imgs/2.png",
     "Categoria2",
     "titulo2",
     "desc2"
    ],
    ["prod_imgs/3.png",
     "Categoria3",
     "titulo3",
     "desc3"
    ],
    ["prod_imgs/4.png",
     "Categoria4",
     "titulo4",
     "desc4"
    ],
    ["prod_imgs/5.png",
     "Categoria5",
     "titulo5",
     "desc5"
    ],
    ["prod_imgs/6.png",
     "Categoria6",
     "titulo6",
     "desc6"
    ],
    ["prod_imgs/7.png",
     "Categoria7",
     "titulo7",
     "desc7"
    ],
]

function populateProdGrid(  ){ //inserirParametroDepois
    const prodCont = document.querySelector("#prodContainer");
    prodsGroup.forEach(([img, categ, tit, desc]) =>{
        prodCont.innerHTML += `
        <div class="prod"><img src="${img}" alt="">
        <div class="categSubt textoPqOrange">${categ}</div>
        <div class="nomeTitu ">${tit}</div>
        <div class="desc ">${desc}</div>
        </div>
        `;
    })
}
populateProdGrid();
function dropMenu(btn){
    if(window.getComputedStyle(btn, null).display){
        var drpdwn = document.getElementById('menu');
        drpdwn.classList.toggle('mostrarMenu');
    }
}
window.onclick = function(event) {
  if (!(event.target.matches('#menu') || event.target.matches('#drpdownBt'))) {
    var dropdowns = document.getElementById("menu");
    if (dropdowns.classList.contains('mostrarMenu')) {
        dropdowns.classList.remove('mostrarMenu');
    }
  }
}
