3/*Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
Calcular e escrever o valor do novo salário.
*/

const  prompt = require('prompt-sync')();

console.log("Exc 03")
console.log("Calcular reajuste da remuneração")

const salarioAtual = Number(prompt("Informe a sua remuneração: "));
const percetualReajuste = Number(prompt("Informe o percentual do reajuste: "));

const salarioReajustado = salarioAtual + (salarioAtual * (percetualReajuste / 100));

console.log("Seu salário mensal com o reajuste será de: R$" + salarioReajustado.toFixed(2) );