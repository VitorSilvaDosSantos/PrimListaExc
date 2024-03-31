8/* Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura 
devem ser fornecidos.
OBS: V = PI * Raio^2 * Altura
*/

const prompt = require('prompt-sync')();

   console.log("Exc 08")
 console.log("Calcular o volume de uma caixa d'água")

     const raio = Number(prompt("Insira o raio da caixa d'água (em metros): "));
  const altura = Number(prompt("Insira a altura da caixa d'água (em metros): "));

           const pi = Math.PI;

    const volume = pi * Math.pow(raio, 2) * altura; 

   console.log("O volume da caixa d'água é: ", volume.toFixed(2), "metros cúbicos.");