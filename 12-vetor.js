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
dinos.push("Brontossauro", "Velocirapitor") //array.push adiciona um item no final do vetor
console.table(dinos)

dinos.unshift("Tricerátops") //adiciona itens no ínicio do array
console.table(dinos)

//Alterando elementos com base no indice (posção)
dinos("Tinanosssauro")
console.table(dinos) //elmento com base em seu indice

//Obtendo um elemento com base de indice
console.log("Primeira posição:", dinos [0]); //retornoo um elemento específico
console.log("Segunda posição:", dinos [1]); //remove o último elemento de valor
console.log("Item da posição 20:", dinos [19]); //retorna indefinido

//Removendo elementos do vetor
dinos.pop() //remove o primeiro elemento do vetor
console.table(dinos);

dinos.shift(); //remove o primeiro elemento do vetor
console.table(dinos);

dinos.splice(1, 1); //remove o elemnto a aprtir do indice 1, contorna 1
console.table(dinos);

