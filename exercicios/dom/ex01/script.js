function add (){
    let teste = document.querySelector("#teste");
    let ul = teste.querySelector("ul");

    let newLi = document.createElement("li");
    newLi.innerText = "Novo item";

    ul.prepend(newLi);
}

let botao = document.querySelector(".botao");
botao.addEventListener("click", add);