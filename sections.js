var menu = document.querySelector('.navegacaoresponsiva');
var tiraRetira = 0;

function menuresp(){
    tiraRetira++;
    menu.classList.add("deslizar");
    if(tiraRetira >= 2){
        menu.classList.remove("deslizar");
        tiraRetira = 0;
    }
}

function clicaEtira(){
    menu.classList.remove("deslizar");
}