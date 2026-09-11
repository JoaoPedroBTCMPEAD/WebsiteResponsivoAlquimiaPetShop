const header = document.querySelector('#header');
const footer = document.querySelector('#footer');
let presentPage = window.location.pathname.split("/").pop().split(".").shift();

window.addEventListener('load', function (presentPage) {
    
    header.innerHTML = '<div class="logo"> <img src="img/RodaII.svg">Prado center car';
    footer.innerHTML = '<div class="logo"> <img src="img/RodaII.svg">Contatos';
})