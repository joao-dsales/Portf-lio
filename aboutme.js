//Este script foi feito com base em um vídeo do origamid.

const aboutme = document.querySelector('.sobremim');
const animate = document.querySelector('.render');

function animeScroll(){
    const eixoY = window.scrollY;
    console.log(eixoY);
}

window.addEventListener('scroll', animeScroll);
