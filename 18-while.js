//while

let contador = 0;
while (contador < 5) {
    contador++;
    console.log(contador);
}

console.log("------------------------------");
var x = 20;
while ( x > 10) {
    console.log(`Entrei no laço while...`);
    x --;
}
console.log(`Terminei!`);

console.log("--------------------------------");
let countdows = 5;
while (countdows > 0) {
    console.log(countdows);
    countdows--;
}

console.log("Lançamento!");

console.log("---------------------------------");
//estourando o limite do cartão - versão while

var limite = 500;
var fatura = 0;

while (fatura <= limite) {
    let gasto = Math.random() * 100; //Math.random() cria valor aleatório entre 0 e 1
    fatura += gasto;
    console.log(`Gastei R$ ${gasto.toFixed(2)} ------ Fatura: R$ ${fatura.toFixed(2)}`);
    //toFixed(2) alterar o valor mostrado para o usuário em duas casas depois da virgula
    fatura > limite && console.log(`Estourou o limite do cartão`);
    //&& faz somente um IF, sem else
}

console.log("-----------------------------------------")
//estourando o limite do cartão - versão do while 
var limite = 500;
var fatura = 0;

do {
    gasto = Math.random() * 100; 
    fatura += gasto;
    console.log(`Gastei R$ ${gasto.toFixed(2)} ------ Fatura: R$ ${fatura.toFixed(2)}`);
    fatura > limite && console.log(`Estourou o limite do cartão`);
} while (fatura <= limite);
    
