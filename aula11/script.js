let dados = {
    'nome': 'Lucas',
    'sobrenome' : 'Cavalcante',
    'idade' : 30,
    'cidade': 'francisco morato',
    'estado' : 'São paulo'
}

console.log(dados);
/* Acessando os atributos de um objeto */

console.log(`Seu nome é ${dados.nome}`);
console.log(`Seu sobrenome é ${dados.sobrenome}`);

/*Criando um objeto dentro de um objeto */

let dados2 = {
    'nome': 'Lucas',
    'sobrenome' : 'Cavalcante',
    'idade' : 30,
    'cidadesVisitadas': {
        'Ba': 'Salvador',
        'Se': 'Aracaju',
        'Mg': 'Belo Horizonte',
        'Al': ['Penedo', 'Maceio', 'Arapiraca']
    },
    'estado' : 'São paulo'
}

/*Acessando um objeto dentro de um objeto */

console.log(dados2.cidadesVisitadas.Ba);

/*Acessando um objeto dentro de um outro objeto com um array */

console.log(dados2.cidadesVisitadas.Al[1]);