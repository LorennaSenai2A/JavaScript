//Crie uma função que receba como parâmetro o ano da nascimento de uma pessoa a retorno sua idade
function idade(anoNascimento) {
    return 2024 - anoNascimento
}

console.log(`Idade: ${idade(2008)}`);

//Crie uma função que receba a quantidade de combustível de carro e retorne quantos Kms ele pode viajar
//...com esse combustível. Considere que o veículo faz uma média de 12 Kms/L.
function viajem(combustivel, kmL) {
    return combustivel * kmL
}

console.log(`Carro 1: 20L -> Percorre ${viajem(20, 12)}kms.`);
console.log(`Carro 2: 8L -> Percorre ${viajem(8, 12)}kms.`);
console.log(`Carro 3: 2L -> Percorre ${viajem(2, 12)}kms.`);
console.log("-----------------------------------------")
//Crie uma função que receba a idade de uma pessoa e retorne uma frase dizendo se ela pode votar ou não
function votar(idade){
    if (idade < 16)
    console.log(`Você não pode votar!`);
 else if (idade >= 16 && idade <18 )
    console.log(`Você pode votar, mas não é obrigatório!`);
else
    console.log(`Você pode votar!`);
}
votar(10);

console.log("------------------------------------------");

function votacao(idade){
switch (true) {
    case idade < 16:
    console.log(`Você não pode votar!`);
    break;
    case idade >= 16 && idade <18:
        console.log(`Você pode votar, mas não é obrigatório!`);
    break;
    default:
        console.log(`Você pode votar!`)
        break;
}
}
votacao(30);

