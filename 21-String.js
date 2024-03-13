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

//obtendo partes de uma string (Método substring)
var texto8 = "O esperto rato, perplexo ficou frente ao aparato";
var sub = texto8.substring(16, 24); //posição onde começa a onde termina
console.log(sub);
var sub2 = texto8.substr(10, 4); //posiçao onde começa e quantos caracteres
console.log(sub2);

//substituir partes de uma string (Método replace)
var texto9 = "O rato roeu a roupa do rei de Roma!";
var novoTexto = texto9.replace("rato", "COELHO");
console.log(texto9);
console.log(novoTexto);

//Maiúsculas e minúsculas (Métodos toUpperCase e toLowerCase)
var texto10 = "O RATO Roeu a rOUpa do REI de Roma!"

//limpando espaços em branco (Método trim)
var texto11 = "    Texto aqui no meio       ";
console.log(`******`,texto11,`******`);
console.log(`******`,texto11.trim(),`******`);

//buscando a posição de uma string (Método index0f)
var texto12 = "O rato roeu a roupa do rato de Roma!"
console.log(texto10.toUpperCase());
console.log(texto10.toLowerCase());

var posicao = texto12.index0f("rato");
var ultimaPosicao = texto12.lasIndex0f("rato");
console.log(`Primeira Ocorrrencia: ${posicao} - Ultima Ocorrencia: ${ultimaPosicao}`);

//dividindo uma string em partes (Método split)
var texto13 ="O rato roeu a roupa do rei de Roma!";
var palavras = texto13.split(" ");
console.table(palavras);

var chaveAcesso = "1234-5678-9012-3456";
var partes = chaveAcesso.split("-");
console.table(partes);