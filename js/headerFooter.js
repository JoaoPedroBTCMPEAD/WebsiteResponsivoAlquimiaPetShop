window.addEventListener("DOMContentLoaded", () =>{
    header = '';
    footer = '';
})

async function loadHeader() {
    const response = await fetch("recursos/header.html");
    const header = await response.text();

    document.querySelector("#header").innerHTML = header;
}

async function loadFooter() {
    const response = await fetch("recursos/footer.html");
    const footer = await response.text();

    document.querySelector("#footer").innerHTML = footer;
}

loadHeader();
loadFooter();