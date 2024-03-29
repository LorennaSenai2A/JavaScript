// Criar uma classe Aluno em JavaScript que represente um aluno em uma instituição de ensino.
//...A classe deve receber informações do aluno, calcular sua idade e apresentar-se como métodos.

// Requisitos:
// A classe Aluno deve ter os seguintes atributos:
// ra: Número de Registro do Aluno (string)
// nome: Nome completo do aluno (string)
// dataNascimento: Data de nascimento do aluno (data)
// curso: Curso do aluno (string)

// A classe Aluno deve ter os seguintes métodos:
// calcularIdade(): Calcula e retorna a idade do aluno em anos.
// apresentar(): Exibe as informações do aluno no formato:

class Aluno {
  constructor(ra, nome, anoNascimento, curso) {
    this.ra = ra;
    this.nome = nome;
    this.anoNascimento = anoNascimento;
    this.curso = curso;
  }
  calcularIdade() {
    return 2024 - this.anoNascimento;
  }
  apresentarSe() {
    console.log(
      `Olá, meu nome é ${
        this.nome
      } e tenho ${this.calcularIdade()}. Faço o curso ${
        this.curso
      }, e utilizo o ra ${this.ra}!`
    );
  }
}

const Aluno1 = new Aluno(4495, "Lorena de Almeida Victor", 2008, "TI");
Aluno1.apresentarSe();

console.log(
  "--------------------------------------------------------------------------------------"
);

// Crie e utilize uma classe "sorvete" contendo a propriedade : sabor, preço e tamanho (P | M | G)
// Crie um sorvete de morango grande
// crie um sorvete de chocolate pequeno
// Crie um sorvete de melancia medio
// Altere o preço do sorvete de morango grande para R$ 10,51

class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  pedido() {
    console.log(
      `Gostaria de pedir o sabor de ${this.sabor}, com o tamanho ${this.tamanho}! Com o preço de ${this.preco} reais.`
    );
  }
  setPreco(novoPreco) {
    this.preco = novoPreco;
  }
}

const cliente1 = new Sorvete("morango", 8, "grande");
const cliente2 = new Sorvete("chocolate", 2, "pequeno");
const cliente3 = new Sorvete("melância", 6, "medio");
cliente1.pedido();
cliente2.pedido();
cliente3.pedido();
console.log(
  "------------------------Aumento do valor do sorvete de morango:-----------------------"
);
cliente1.setPreco(10.51);
cliente1.pedido();

console.log(
  "--------------------------------------------------------------------------------------"
);
// 1.Comparação de strings (sem case sensitive):
// Escreva uma função em JavaScript que recebe duas strings e verifica se elas são iguais,
// ignorando o tamanho das letras (maiúsculas e minúsculas).

// 2.Extrair números de uma string:
// Crie uma função em JavaScript que recebe uma string e retorna uma lista contendo apenas
// os números encontrados nela.

// 3.Inverter a ordem das palavras em uma frase:
// Desenvolva uma função em JavaScript que recebe uma frase e retorna uma nova string com a
// ordem das palavras invertida.

function compararStrings(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase();
}

const string1 = "Olá Mundo";
const string2 = "Olá mundo";

if (compararStrings(string1, string2)) {
  console.log("As strings são iguais, ignorando o caso das letras.");
} else {
  console.log("As strings são diferentes.");
}
console.log(
  "--------------------------------------------------------------------------------------"
);

function extrairNumeros(str) {
  const regex = /\d+/g;
  const numbers = str.match(regex);
  return numbers;
}

let string = "O produto 12, 1, 2587, possuem o preço de R$12,99.";
let numeros = extrairNumeros(string);
console.log(numeros); // ["12", "99"]
console.log(
  "--------------------------------------------------------------------------------------"
);

function inverterFrase(frase) {
  const palavras = frase.split(" ");
  return palavras.reverse().join(" ");
}
const frase = "Este é um exemplo de frase invertida";
const fraseInvertida = inverterFrase(frase);
console.log(fraseInvertida); //"invertida frase de exemplo um é Este"
