function clicou() {
    const input = document.querySelector("input");

    console.log(input.hasAttribute("id"));
    console.log(input.getAttribute("placeholder"));
    input.setAttribute("id", "teste");
    console.log(input.hasAttribute("id"));
}

const botao = document.querySelector(".botao");
botao.addEventListener("click", clicou);