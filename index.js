import { Cliente } from "./Cliente.js";
import { Gerente } from "./Fucionarios/Gerente.js"
import { Diretor } from "./Fucionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"
// import { ContaCorrente } from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";

// const cliente1 = new Cliente("Ricado", 44347865815);

// const ContaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);

// ContaCorrenteRicardo.depositar(500);
// ContaCorrenteRicardo.sacar(100);

// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

// const contaSalario = new ContaSalario(cliente1);
// contaSalario.depositar(100);
// contaSalario.sacar(10);

console.log("===============================================");
console.log("=================== Bytebank ==================");
console.log("===============================================");
// console.log(" ");
// console.log(ContaCorrenteRicardo);
// console.log(" ");
// console.log(contaPoupanca);
// console.log(" ");
// console.log(contaSalario);

const diretor = new Diretor("Kelvin Lopes", 14000.00, 23299834374);
diretor.cadastrarSenha("senhas123");
const gerente = new Gerente("Franklin Campos", 9000.00, 33418757682);
gerente.cadastrarSenha("tami4112")
const cliente = new Cliente("Renata Lira", 77241455361, "1234");

const loginGerente = SistemaAutenticacao.login(gerente, "tami4112");
const loginDiretor = SistemaAutenticacao.login(diretor, "senhas123");
const loginCliente = SistemaAutenticacao.login(cliente, "1234")

console.log(loginGerente);
console.log(loginDiretor);
console.log(loginCliente);