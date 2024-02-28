var matriz = [
    [3, 2, 1],
    [2, 1, 5],
    [5, 3, 2]
];

console.table(matriz); 

//Obtendo elemento com base e seus indices
console.log("Primeira diagonal =", matriz [0][0], matriz[1][1], matriz[2][2]);
console.log("Segunda diagonal =", matriz [0][2], matriz[1][1], matriz[2][0]);
console.log("Terceira diagonal =", matriz [2][0], matriz[1][1], matriz[0][2]);
console.log("Quarta diagonal =", matriz [2][2], matriz[1][1], matriz[0][0]);

//Crie um sistema de cadastro de usuário contendo uma única variável, com os itens abaixo na ordem:
//Nome
//Idade
//Cor favorita
//Endereco
//Nome do pet
//Fruta favorita

//Olá "Fulano"! Seja bem-vindo ao nosso sistema.
//Você mora no endereço "Endereço", e tem um pet chamado "pet".
//Sua idade é "idade" e gosta muito da fruta "fruta".
//Sua cor favorita é "Cor Favorita".

var usuario = ["Lorenna", 16, "Roxa", "Jau-SP", "Thor", "Uva verde"];

console.log("Olá", usuario[0] + "!", "Seja bem-vinda ao nosso sistema.");
console.log("Você mora no endereço", usuario[3] + "?", "e tem um pet chamado", usuario[4]);
console.log("Sua idade é ", usuario[1] + "?", "e você gosta da fruta ", usuario[5] + "?");
console.log("Sua cor favorita é", usuario[2] + "?");
console.log("Obrigada pela confirmação dos dados, eles iram ser analizados e fixados no sistema!");