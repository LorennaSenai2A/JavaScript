// criando um objeto do tipo data
var data1 = new Date();
console.log(data1);

// criando um objeto do tipo "data" com data específica Date()
var data3 = new Date("2009=02-14");
console.log(`Data: ${data3}`);
console.log(`Anoa: ${data3.getFullYear()}`);
console.log(`Mês: ${data3.getMonth() + 1}`);
console.log(`Dia: ${data3.getDate()}`);

const mes = [
    "janeiro", 
    "fevereiro", 
    "março", 
    "abril",
    "maio", 
    "junho", 
    "julho", 
    "agosto", 
    "setembro", 
    "outubro", 
    "novembro",
    "dezembro",
];
console.log(`Retornando o mês por escrito!`);
console.log(`Mês: ${mes[data3.getMonth()]}`);

const diaDaSemana = [
"domingo",    
"segunda",
"terça",
"quarta",
"quinta",
"sexta",
"sábado",
];
console.log(`Dia da semana: ${data3.getDay()}`);

console.log(`-------------------------------------`);
const dataNasc = new Date("2008=02-12")
const dataAtual = new Date();

const diferenca = dataAtual.getTime() - dataNasc.getMinutes();
console.log(`Diferença: ${diferenca}`);
//console.log(`Diferença: $(diferença)`);
const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
console.log(`Idade: ${idade}`);
console.log(`-------------------------------------`);

const diferencaAnos =dataAtual.getFullYear() - dataNasc.getFullYear();
console.log(`Diferença em anos: ${diferencaAnos}`);

if(dataAtual.getMonth() < dataNasc.getMonth() ||
(dataAtual.getMonth() === dataNasc.getMonth() &&
dataAtual.getDate() < dataNasc.getDate())){
    console.log(`Ainda não fez aniversário!`);
    console.log(`Idade: ${diferencaAnos - 1}`);
}