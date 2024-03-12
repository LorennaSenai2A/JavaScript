//Suponha que a população de um país A  seja de a habitantes com uma taxa anual de crescimento
//...de 3% e que a população de um país B seja de b habitantes , com uma taxa anual de crescimento
//... de 1,5%, fazer um algoritmo que calcule e escreva o número de anos necessários para que a 
//...população do país A ultrapasse ou iguale a população do país B, mantidas essas taxas de crescimento.

var populacaoA = 100003;
var populacaoB = 300004;
var ano = 0;

while (populacaoA < populacaoB) {
    ano++;
    populacaoA *= 1.03;
    populacaoB *= 1.015;
}
console.log(`A populacao A (${Math.round(populacaoA)}) irá passar a população B (${Math.round(populacaoA)}) 
em ${ano} anos!`);

console.log("-----------------------------------")
//Criar um "jogo da velha" que mostre as informações dentro da imagem abaixo. Inserir as informações de
//...forma randomica. Informar ao final quem ganhou X ou O.

//console.log(`___|___|___`)
//console.log(`___|___|___`)
//console.log(`   |   |   `)


const jogoVelha = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

let jogadorAtual = "X";

function jogar(jogador) { 
    let linha, coluna;

    do {
        linha = Math.floor(Math.random() *3);
        coluna = Math.floor(Math.random() *3);
    } while (jogoVelha[0][0] !== " ");

jogoVelha[linha][coluna] = jogador;
jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}

function verificaVencedor() {
    for (let i = 0; i < 3; i++) {
        //verifica coluna
        if (
            jogoVelha[0][i] === jogoVelha[1][i] && 
            jogoVelha[1][i] === jogoVelha[2][i] &&
            jogoVelha[1][i] !== ""
        ) {
            console.log(`O jogador ${jogoVelha[1][i]} ganhou`);
            return jogoVelha[1][i];
            //verificando linhas
    } else if (
        jogoVelha[i][0] === jogoVelha[i][1] && 
        jogoVelha[i][1] === jogoVelha[i][2] &&
        jogoVelha[i][1] !== ""
    ) {
        console.log(`O jogador ${jogoVelha[i][1]} ganhou`);
        return jogoVelha[i][1];
} 
    }
if (
    //verificando diagonal
    jogoVelha[0][0] === jogoVelha[1][1] && 
    jogoVelha[1][1] === jogoVelha[2][2] &&
    jogoVelha[1][1] !== " "
) {
    console.log(`O jogador ${jogoVelha[1][1]} ganhou`);
    return jogoVelha[1][1];
} else if (
    jogoVelha[0][2] === jogoVelha[1][1] && 
    jogoVelha[1][1] === jogoVelha[2][0] &&
    jogoVelha[1][1] !== " "
) {
    console.log(`O jogador ${jogoVelha[1][1]} ganhou`);
    return jogoVelha[1][1];
}


if (!jogoVelha.some((event) => event.includes(""))){
    console.log("O jogo empatou");
    return "Empatou";
}
return "";
}

let vencedor = "";

while (!vencedor) {
    jogar(jogadorAtual);
    console.table(jogoVelha);
    vencedor = verificaVencedor();

    if (!vencedor) {
        jogar(jogadorAtual);
        console.table(jogoVelha);
        vencedor = verificaVencedor();
    }
}

jogar(jogador1)
jogar(jogador2)
jogar(jogador1)
jogar(jogador2)
jogar(jogador1)
jogar(jogador2)
jogar(jogador1)
jogar(jogador2)
jogar(jogador1)
console.table(jogoVelha);





