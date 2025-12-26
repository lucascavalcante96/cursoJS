const somar = (x, y) => {
    if (x == 2) {
        return (x + 5) + y;
    } else {
        return (x + 10) + y;
    }
}
let x = 8;
let y = 15;

let resultado = somar(x, y);
console.log(resultado);

const sobrenome = sob => 'Lucas ' + sob;

let sob = sobrenome('Cavalcante');
console.log(sob);

const divisao = (x, y) => {
    return x / y;
}

let result = divisao(x, y);
console.log(result);