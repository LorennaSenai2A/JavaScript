// Atividade sobre Variávies e constantes
var nome = "Lorenna";
var banco = "Bradesco";
var agencia = 237;
var conta = 12129090;
var saldo = 100;

console.log(
  "Olá,",
  nome,
  "O banco",
  banco,
  "fica muito feliz com seu cadastro! Sua Agencia é:",
  agencia,
  "e a numero da conta é:",
  conta
);
console.log("Seu saldo é:", saldo, "desde a última vez");

console.log("--------------------------------------------");
saldo = saldo + 20;
console.log("Voce recebeu um pix no valor de R$ 20,00");

console.log("--------------------------------------------");
saldo -= 60;
console.log("Voce pagou um valor de R$ 60,00");

console.log("--------------------------------------------");
saldo += 120;
console.log("Voce recebeu um pix de R$ 120,00");

console.log("--------------------------------------------");
saldo += 30;

console.log("Voce recebeu um pagamento de R$ 30,00 da lanchonete");
console.log("--------------------------------------------");
saldo -= 5;
console.log("Voce fez uma transferência de R$5,00");

console.log(
  "Olá",
  nome,
  ",percemos que entrou em conatato com o",
  banco,
  ",insirá seus dados de confirmação"
);

console.log("Tem certeza que sua agência é:", agencia, "e sua conta é:", conta);
console.log("Certinho, você contém", saldo, "reais disponíveis");
