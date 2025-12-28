let dados = {
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

/* alterando os objetos dentro de um array*/

dados.cidadesVisitadas.Al.push('Igreja Nova');

console.log(dados.cidadesVisitadas.Al)

dados.cidadesVisitadas.Al.push('Junqueiro');

console.log(dados.cidadesVisitadas.Al);


/* alterando(adicionando) os objetos adição dentro de um array*/

dados.cidadesVisitadas.Pr = 'Curitiba';

console.log(dados.cidadesVisitadas.Pr);

dados.estado = 'Rio de Janeiro';
console.log(dados.estado)
console.log(dados)

/*Alterando um valor inteiro por atribuição */

dados.idade += 1;

console.log(dados.idade)