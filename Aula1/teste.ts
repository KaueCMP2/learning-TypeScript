//? -----------------------------------------------------------------
//? Exercicio 1
//? -----------------------------------------------------------------

let nome: string = "Kauê";
let idade: number = 7;
let ativo: boolean = true;

console.log("O nome é: " + nome + ". E tem:" + idade + " anos de idade");
console.log(`O nome é ${nome}. E tem: ${idade} anos de idade`);


//? -----------------------------------------------------------------
//? Exercicio 2
//? -----------------------------------------------------------------
//?  Declare 3 variáveis e imprima elas:
let cidade = "SP";
console.log(typeof (cidade));


//? -----------------------------------------------------------------
//? Exercicio 3
//? -----------------------------------------------------------------
//? Crie uma variável cidade sem tipar explicitamente e atribua um 
//? valor string. Em seguida, imprima o tipo de dado para verificar usando typeof.
function dobro1(numero: number) { return console.log(numero * 2) };
dobro1(3);


//? -----------------------------------------------------------------
//? Exercicio 4
//? -----------------------------------------------------------------
//? Crie uma função dobro que recebe um número e retorna o dobro.
const dobro2 = (numero: number) => { return console.log(numero * 2) };
dobro2(2);

//? -----------------------------------------------------------------
//? Exercicio 5
//? -----------------------------------------------------------------
//? Refaça o exercício anterior usando arrow function.
const saudacao = (nome: string) => nome ? console.log(`Olá ${nome}`) : console.log("Olá, visitante");
saudacao("Kaue");

//? -----------------------------------------------------------------
//? Exercicio 6
//? -----------------------------------------------------------------
//? Crie uma função saudacao que recebe um nome opcional e retorna
let numeros: number[] = [1, 2, 3, 4, 5];
let soma: number = 0;
const returnNumbers = (num: number[]) => console.log(numeros.reduce((acumulador, valor) => acumulador + valor, 0))
returnNumbers(numeros);

//? -----------------------------------------------------------------
//? Exercicio 7
//? -----------------------------------------------------------------
//? Crie um array de números e uma função que retorna a soma deles.
const formatarId = (id: number | string) => {
    console.log(`ID: ${id}`);
}

formatarId("1");
formatarId(3);

//? Exercicio 8
type alunos = {
    nome: string;
    idade: number;
}

const aluno1: alunos = { nome: "kaue", idade: 19 }

console.log(aluno1)

//? Exercicio 9
const mostrarAluno = (a: alunos) => { console.log(`Nome do aluno: ${a.nome} \nIdade do aluno: ${a.idade}`); }
mostrarAluno(aluno1);


//? Exercicio 10
type produtos = {
    nome: string;
    preco: number;
    emPromocao: boolean;
}

const cachorroQuente: produtos = { nome: "Hot-Dog", preco: 22, emPromocao: true };

const calcularPrecoFinal = (p: produtos) => (p.emPromocao ? p.preco = p.preco - (p.preco % 10) : p = p);
calcularPrecoFinal(cachorroQuente);
console.log(cachorroQuente);