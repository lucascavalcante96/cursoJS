let produtos = ['Arroz', 'Feijão', 'Açucar', 'Oléo'];
let x = 0;

for (x; x < produtos.length;x++) {
    console.log(produtos[x]);
}

/* utilizando o in no for */

for (x in produtos){
    console.log(produtos[x]);
}