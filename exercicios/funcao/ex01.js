/* exercicio para calcular a porcentagem de 2 números
exemplo: 25% de 40 é 10
*/

function calcPct(x,y){
    let porcentagem = (y / x) * 100;
    return porcentagem;
}

let x = 50;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);
