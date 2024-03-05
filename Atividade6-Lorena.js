//dada a matriz abaixo, imprima os elementos da sua diagonal principal

var matrizBaixo = [
    [3, 5, 8], 
    [1, 9, 2],
    [7, 1, 4],
];
console.table(matrizBaixo);

for (let mB = 0; mB < matrizBaixo.length; mB++) {
  console.log(matrizBaixo[mB][mB]);
}


