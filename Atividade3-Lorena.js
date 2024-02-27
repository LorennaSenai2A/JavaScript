//Exercícios sobre Vetores e Matrizes

//Criar array
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];

console.log(frutas);
console.log(frutas[0]);
console.table(frutas);

//Adicionar Tangerina
frutas.push("Tangerina");
console.table(frutas);

//Adicionar Goiaba no ínicio
frutas.unshift("Goiaba");
console.table(frutas);

//Mostrar indice 5
console.log("Quinta posicao possuei o", frutas[5]);

//Excluir Uva
//frutas.splice(4, 1);

var posicao = frutas.indexOf("Uva");
console.log(posicao);
frutas.splice(posicao, 1);
console.table(frutas);

//Copia de array
var copia = frutas.splice(2, 5);
console.table(copia);

console.log("----------------");

//Crie e imprima um vetor com 5 elementos numéricos
var numeros = [2, 4, 6, 8, 10];
console.table(numeros);

//Imprima na tela o 3 elemento do vetor
console.log("O terceiro elemento é", numeros[2]);

//Faça uma cópia do vetor original
var copiaNumero = numeros.slice();
console.table(copiaNumero);

//Altere o conteúdo do vetor cópia para que seus valores sejam o dobro dos valores do vetor original
copiaNumero[0] = numeros[0] * 2;
copiaNumero[1] = numeros[1] * 2;
copiaNumero[2] = numeros[2] * 2;
copiaNumero[3] = numeros[3] * 2;
copiaNumero[4] = numeros[4] * 2;

console.table(copiaNumero);