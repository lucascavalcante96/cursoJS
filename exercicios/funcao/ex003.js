/* Crie uma função que valide usuário e senha.
Usuário correto: pedro
Senha correta: 123
*/

let usuario = "pedro";
let senha = 1234;

function validar(usuario, senha){
    if ((usuario == "pedro") && (senha == 123)){
        return true;
    } else {
        return false;
    }
}

let validacao = validar(usuario, senha);

if (validacao){
    console.log("Acesso concedido.");
} else {
    console.log("Acesso negado.");
}