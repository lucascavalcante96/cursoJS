let dados = [
    {'nome': 'lucas', 'sobrenome': 'Cavalcante'},
    {'nome': 'Gizele', 'sobrenome': 'Vilela'},
    {'nome': 'Lourdes', 'sobrenome': 'Cavalcante'}
]

let carros = [
    {'modelo': 'onix', 'motor': '1.0 turbo'},
    {'modelo': 'hb20', 'motor': '1.0 turbo'},
    {'modelo': 't-cross', 'motor': '2.0 turbo'}
]

for (let nome of dados){
    console.log(`${nome.nome} ${nome.sobrenome}`);
}

for (let x in carros){
    console.log(`Modelo: ${carros[x].modelo} - Motor: ${carros[x].motor}`);
}