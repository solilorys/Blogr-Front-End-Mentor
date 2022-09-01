const btnMobile = document.querySelector(".cabecalho__botao");
const accordionContainer = document.querySelectorAll(".accordion__container");

function toggleCabecalho() {
    const nav = document.querySelector(".cabecalho__nav");
    nav.classList.toggle("active");
}

for (i = 0; i < accordionContainer.length; i++) {
    accordionContainer[i].addEventListener("click", function() {
        this.classList.toggle("active");
    });
}

btnMobile.addEventListener("click", toggleCabecalho);