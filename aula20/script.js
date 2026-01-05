function cliclou(){
    let teste = document.querySelector('#teste');
    let ul = teste.querySelector('ul');
    ul.innerHTML += '<li>novo item</li>'
}

let botao = document.querySelector('.botao');

botao.addEventListener("click", cliclou);