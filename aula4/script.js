let idade = 30;

if (idade >= 18 && idade <= 60){
    console.log(`Você é adulto`);
}
else{
    console.log(`você Não é um adulto`);
}

let estado = "SP";

if (estado == 'SP' || estado == 'RJ' || estado == 'MG' || estado == 'ES'){
    console.log(`É um estado do Suldeste`)
}

// Aprendendo o IF Else
if (idade < 18){
    console.log("Você não é um adulto");
}else if (idade >=18 && idade <=60){
    console.log("Você é um adulto.");
}else{
    console.log("Você é um idoso");
}

//condicional ternaria

let isMember = true;

let shipping = isMember ? 2 : 10;

