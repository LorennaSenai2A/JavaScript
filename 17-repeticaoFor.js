//Laço de repetição FOR 
//escrever para o usuário 1000x "prestar mais atenção nas aulas!"

//for (let i = 0; i < 1000; i++) {
 //   console.log("Prestar mais atenção nas aulas");
//}

//números pares
for (let i = 0; i <= 1000; i +=2) {
    console.log(i);
}

console.log("------------------------------------");
//números impares
  for (let i = 1; i <= 1000; i +=2) {
    console.log(i);
}

console.log("------------------------------------");
//números impares com IF 
for (let i = 0; i <= 1000; i ++) {
    if (i % 2 != 0) {
    console.log(i);
    }
}

console.log("------------------------------------");
//escreva todos os números de 1 a 20 com FOR 
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

console.log("------------------------------------");
//escreva todos os números pares entre 1 a 20 com FOR 
for (let i = 2; i <= 20; i+=2) {
    console.log(i);
}

console.log("-------------------------------------");
for (let i = 2; i <= 20; i +=2) {
    if (i % 2 == 0) {
    console.log(i);
    }
}

console.log("--------------------------------------");
//dado um vetor com números 5,6,8,14,0,9,7,2.
//calcule e exiba a somatória de seus elementos FOR.

const numeros = [5,6,8,14,0,9,7,2];
var somar = 0

for (let i = 0; i < numeros.length; i++) {
    somar += numeros[i]
}
console.log(`A soma dos elementos da array é: ${somar}`);

console.log("-----------------------------------------");
//dado um vetor com números 5,6,8,14,0,9,7,2.
//multiplique todos os seus elementos por 3 utilizando o loop FOR
//...em seguida, mostre o novo vetor.

let num = [5, 6, 8, 14, 0, 9, 7, 2]
console.table(num);
for (let i = 0; i < num.length; i++) {
    num[i] *= 3;
}

//dada a matriz 2x3, escreven para o usuário todos os seus elementos com antes
//...respectivas posições da matriz
// [8,4,1]
// [3,7,8]

var matriz = [ 
    [8, 4, 1],
    [3, 7, 8]
];

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
    //console.log(linha);
    for (let coluna = 0; coluna < matriz.length; coluna++) {
        //console.log(coluna);
        console.log(`Matriz [${linha},${coluna}] = ${matriz[linha][coluna]}`);
    }
}



