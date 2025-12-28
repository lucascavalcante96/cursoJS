let fruits = ['maça', 'banana', 'uva', 'morango'];

/*Funções de um array */

/*Adicionando um item novo ao final*/

fruits.push('kiwi');

//adicionando um item novo no inicio

fruits.unshift('abacaxi');

//removendo itens do array (ultimo)

fruits.pop();

//removendo o primeiro item do array

fruits.shift();

//retornando o array em uma string

console.log(fruits.join('-'));

/* Verificando o tamanho do array */
console.log(fruits.length)

//modificando o ultimo item do array

fruits[fruits.length - 1] = 'jabuticaba';

console.log(fruits);