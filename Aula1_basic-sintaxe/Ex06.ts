//? -----------------------------------------------------------------
//? Exercicio 6
//? -----------------------------------------------------------------
//? Crie uma função saudacao que recebe um nome opcional e retorna

let numeros: number[] = [1, 2, 3, 4, 5];
let soma: number = 0;

const returnNumbers = (num: number[]) => console.log(numeros.reduce((acumulador, valor) => acumulador + valor, 0))
returnNumbers(numeros);
