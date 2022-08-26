const btnMobile = document.querySelector(".cabecalho__botao");
const accordionHeader = document.querySelector(".accordion__header");

function toggleCabecalho() {
    const nav = document.querySelector(".cabecalho__nav");
    nav.classList.toggle("active");
}

function toggleAccordion() {
    const accordionContainer = document.querySelector(".accordion__container");
    accordionContainer.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleCabecalho);
accordionHeader.addEventListener("click", toggleAccordion);