function cliclou(){
    let teste = document.querySelector('#teste');
    let ul = teste.querySelector('ul');
    
    ul.children[0].append("Modificado");

    let newLi = document.createElement('li');
    newLi.innerText = 'novo item adicionado';

    ul.appendChild(newLi);

}

let botao = document.querySelector('.botao');

botao.addEventListener("click", cliclou);