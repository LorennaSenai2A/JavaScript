//  definindo uma classe Pessoa
// class Pessoa {
//   constructor(pNome, pIdade) {
//     this.nome = pNome;
//     this.idade = pIdade;
//   }
//   apresentarSe() {
//     console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
//   }
//   envelhecer() {
//     this.idade++;
//   }
// }

// criando objetos do "tipo" Pessoa
// var pessoa1 = new Pessoa("Talda Dienefer", 52);
// var pessoa2 = new Pessoa("Taldo Pedrin", 18);

// pessoa1.apresentarSe();
// pessoa2.apresentarSe();

// pessoa1.envelhecer();
// pessoa1.apresentarSe();

// pessoa2.envelhecer();
// pessoa2.apresentarSe();

// abstrair as caracterícas mais importantese descartar
// console.log("----ABSTRAÇÃO----");

// class Pet {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }
//   alimentar() {
//     console.log(`${this.nome} foi ailemntado!`);
//   }
// }
// const meuPet = new Pet("Rex", 2, "Cachorro");
// console.log(
//   `Meu pet é um ${meuPet.tipo}, chamado ${meuPet.nome} e tem ${meuPet.idade} anos!`
// );
// meuPet.alimentar();

// console.log("----HERENÇA----");
// class Animal {
//   constructor(nome, idade, tipoAlimentao) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipoAlimentao = tipoAlimentao;
//   }
//   alimentar() {
//     console.log(`Seu animal ${this.nome} foi alimentado!`);
//   }
//   emitirSom() {
//     console.log(`Barulho padrão de animal!`);
//   }
// }
// class Catioro extends Animal {
//   alimentar() {
//     console.log(`O catioro ${this.nome} foi alimentado`);
//   }
//   emitirSom() {
//     console.log(`AU AU!`);
//   }
// }
// const pet = new Animal("Carlos", 10, "Comida espacial");
// const meuCatioro = new Catioro("Rex", 3, "Ração");

// pet.alimentar();
// pet.emitirSom();
// console.log("");
// meuCatioro.alimentar();
// meuCatioro.emitirSom();

// console.log("----ENCAPSULAMENTO----");
// class Petzinho {
//     constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade
//     this.tipo = tipo;
// }
// getNome() {
//     return this.nome;
// }
// setNome(novoNome) {
//     this.nome = novoNome;
// }
// }
// const novoPetzinho = new Petzinho("Bob", 3, "Cachorro");
// console.log(novoPetzinho.getNome()); //"Bob"
// novoPetzinho.setNome("Rex");
// console.log(novoPetzinho.getNome()); //"Rex"

console.log("----POLIMORFISMO----")
class   Animal{
constructor(nome) {
    this.nome = nome;
  }
  fazerBarulho() {
    console.log("O animal faz um barulho genérico.");
  }
}
class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }
  fazerBarulho() {
    console.log("O cachorro late!");
  }
}
class Gato extends Animal {
  constructor(nome) {
    super(nome);
  }
  fazerBarulho() {
    console.log("O gato mia!");
  }
}
// Exemplo de uso
const animais = [
  new Cachorro("Rex"),
  new Gato("Mia"),
  new Animal("Bob"), // Animal genérico
];
for (const animal of animais) {
  animal.fazerBarulho();
}

