//const numeros = [1,2,3,4,5];
//console.log(numeros);
//console.log(numeros[2]);

//numeros[2]=6
//console.log(numeros);
//console.log(numeros[2]);

var dinos = ["Titanossauro Rex", "Estegossauro", "Anquilossauro"];
console.log(dinos); //retorna todos os itens do array
console.log(dinos[0]); //retorno o primeiro indice do array
console.log(""); //pular linha
console.table(dinos); //cria tabela com os itens do array
console.log("O vetor tem", dinos.length, "elementos!"); //mostrando quantidade de itens

//adicionando elementos ao vetor existente
dinos.push("Brontossauro"); //array.push adiciona um item no final do vetor
console.table(dinos);

dinos.unshift("Tricerátops"); //adiciona itens no ínicio do array
console.table(dinos);

//Alterando elementos com base no indice (posição)
dinos["Tinanosssauro"];
console.table(dinos); //elmento com base em seu indice

//Obtendo um elemento com base de indice
console.log("Primeira posição:", dinos[0]); //retornoo um elemento específico
console.log("Segunda posição:", dinos[1]); //remove o último elemento de valor
console.log("Item da posição 20:", dinos[19]); //retorna indefinido

//Removendo elementos do vetor
dinos.pop(); //remove o primeiro elemento do vetor
console.table(dinos);

dinos.shift(); //remove o primeiro elemento do vetor
console.table(dinos);

dinos.splice(1, 1); //remove o elemento a aprtir do indice 1, contorna 1
console.table(dinos);

console.log("");
console.log("----------Continuação Aula------------");
var dinos = [
  "Tricerátops",
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
  "Ictiossauro",
  "Pterodáctilo",
  "Espinossauro",
];

console.table(dinos);

var elementoProcurado = "Brontossauro";
var posicao = dinos.indexOf(elementoProcurado); //retorna o valor do indice da tabela
console.log("O " + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "Pterodáctilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "Tricerátops";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);

//Criando cópia de array (vetor)
var copia1 = dinos.slice(); //.slice() faz uma copia real do item vetor
console.log("Vetor cópia 1");
console.table(copia1);

var copia2 = dinos.slice(1,3); //.slice(1,3) determina onde começa e onde termina a copia
console.log("Vetor copia 2");
console.table(copia2);
