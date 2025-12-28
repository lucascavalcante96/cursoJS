let dados = {
    'nome': 'Lucas',
    'sobrenome': 'Cavalcante',
    'nomeCompleto': function(){
        return `${this.nome} ${this.sobrenome}`
    }
}

/*Para usar a função nomeCompleto é necessário chamar a função */

/* Forma errada de se chamar console.log(dados.nomeCompleto) */

/* No exemplo acima ele retornaria [Function: nomeCompleto] */

/* Forma correta de se chamar */

console.log(dados.nomeCompleto());
