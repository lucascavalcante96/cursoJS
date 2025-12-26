let idade = 17;

function maiorDeIdade(idade){
    if (idade >= 18) {
        return true;
    } else{
        return false;
    }
}

let verificador = maiorDeIdade(idade);
if (verificador) {
    console.log('Você é maior de idade');
} else {
    console.log("Você é menor de idade");
}