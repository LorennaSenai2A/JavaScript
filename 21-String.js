//Variáveis de tipo string (Texto)
var texto = "Olá, eu sou um texto!";
console.log(texto);

//Concatenação de strings
var texto1 = "Olá, ";
var texto2 = "eu sou um texto!";
var texto3 = texto1 + texto2;
console.log(texto3);

texto1 += texto2;
console.log(texto1);

//Tamanho de uma string (Método length)
var texto4 = "Olá, meu nome é Cristiano!";
console.log(`Tamanho do texto: ${texto4.length} caracteres!`);

//Caracteres de escape
var texto5 = "Olá, meu nome é \"Cristiano\"!";
console.log(texto5);
var texto6 = "Quebra de linha \noutra linha";
console.log(texto6);
var texto7 = "Tabulação \toutra tabulação";
console.log(texto7);