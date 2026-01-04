/* aprendendo a manipular o DOM */

document.getElementsByTagName("h1");

/* no comando acima peguei todos os elementos que tem a tag h1 */

document.getElementById('teste');

/* no comando acima peguei todos os elementos que tem a o id teste */


document.getElementsByClassName('container');

/* no comando acima peguei todos os elementos que tem a class container */

document.querySelector('.botao');
/*retorna o primeiro elemento da class botão */

document.querySelectorAll('#teste2 ul li');
/* retorna todos os elementos do id teste2 que são listas */

function cliclou(){
    console.log('Cliclou no botão')
}

let botao = document.querySelector('.botao');
botao.addEventListener("click", cliclou);