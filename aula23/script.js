function apertou(e){
    console.log('Apertou');
    console.log(e.code);
}

function segurou(e){
    console.log('Segurou');
    console.log(e.key);
}

function soltou(){
    console.log('soltou');
}
const input = document.querySelector("input");
input.addEventListener("keydown", apertou);
input.addEventListener("keypress", segurou);
input.addEventListener("keyup", soltou);