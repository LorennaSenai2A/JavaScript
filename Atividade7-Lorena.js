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

var jogador1 = "X"
var jogador2 = "O"

const jogoVelha = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]
console.table(jogoVelha)

function jogar(jogador) { 
    let linha, coluna
    do {
        linha = Math.floor(Math.random() *3);
        coluna = Math.floor(Math.random() *3);
    } while (jogoVelha[linha][coluna] !== " ");
    jogoVelha[linha][coluna] = jogador
}

function jogadaAleatoria(jogador) {
jogoVelha[linha][coluna] = jogador
}

const linhaVencador = [
    [jogoVelha[0][0],[0][1],[0][2]]
    [jogoVelha[1][0],[1][1],[1][2]]
    [jogoVelha[2][0],[2][1],[2][2]]

    [jogoVelha[0][0],[1][0],[2][0]]

    [jogoVelha[1][0],[1][1],[2][1]]
    [jogoVelha[0][0],[0][1],[0][2]]

    [jogoVelha[0][0],[1][1],[2][2]]

    [jogoVelha[2][0],[2][1],[2][2]]
]


// jogar(jogador1)
// jogar(jogador2)
// jogar(jogador1)
// jogar(jogador2)
// jogar(jogador1)
// jogar(jogador2)
// jogar(jogador1)
// jogar(jogador2)
// jogar(jogador1)
// console.table(jogoVelha);





