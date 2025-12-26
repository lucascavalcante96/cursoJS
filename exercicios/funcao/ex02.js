/*
Calcule o preço do imóvel
-m² = 3000
-se tiver 1 quarto, o m2 é 1x
- se tiver 2 quartos, o m2 é 1.2x
-se tiver 3 quartos, o m2 é 1.5x
*/

let metragem = 123;
let quartos = 3;

function calcularImovel(metragem,quartos) {
    if (quartos == 2){
        let valor = (metragem * 3000) * 1.2;
        return valor;
    } else if (quartos == 3){
        let valor = (metragem * 3000) * 1.5;
        return valor;
    } else{
        let valor = metragem * 3000;
        return valor;
    }
}

let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);