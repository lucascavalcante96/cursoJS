function apertou(e){
    console.log('Apertou');
    console.log(e.code);
}

function segurou(e){
    console.log('Segurou');
    console.log(e.key);
}

function soltou(s){
    console.log(s.shiftKey);
    console.log(s.ctrlKey);
    console.log(s.altKey);
}
const input = document.querySelector("input");
/*input.addEventListener("keydown", apertou);
input.addEventListener("keypress", segurou);*/
input.addEventListener("keyup", soltou);