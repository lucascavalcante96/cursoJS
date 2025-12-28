let personegem = {
    'nome' : 'lucas',
    'idade' : '29',
    'carros': [
        {
            'modelo':'bmw 320i', 'combustivel': 'flex', 'motor': '2.0'
            
        },{
            'modelo': 'mercedes gla 200', 'combustivel': 'flex', 'motor': '2.4'
        }
    ]
}

/*Alterando objetos onde se tem um array e dentro do array se usa um outro objeto */

personegem.carros[0].combustivel = 'Gasolina';

console.log(personegem.carros[0]);