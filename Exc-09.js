9 /* Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.
*/

const prompt = require('prompt-sync')();

     console.log("Exc 09")
   console.log("Soma e Multiplicação")

      const num1 = Number(prompt("Insira o número 1: "));
    const num2 = Number(prompt("Insira o número 2: "))

   const resultadofinal = (num1 + num2) * num1;

 console.log("Resultado: ", resultadofinal);