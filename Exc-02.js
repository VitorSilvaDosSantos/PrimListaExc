2/* Escreva um script para ler o número total de eleitores de um município,
o número de votos brancos, nulos e válidos. Calcular e escrever o percentual 
que cada um representa em relação ao total de eleitores.
*/
const prompt = require('prompt-sync')();

console.log("Exc 02")
console.log("Numero de eleitores no percentual")

const  tEleitores = Number(prompt("Total de eleitores: "));
    const  vBrancos = Number(prompt("Número dos votos brancos: "));
       const  vNulos = Number(prompt("Número dos votos nulos: "));
           const  vValidos = Number(prompt("Número dos votos positivos: "));

              const pBrancos = (vBrancos / tEleitores) * 100;
                 const pNulos = (vNulos / tEleitores) * 100; 
                     const pValidos = (vValidos / tEleitores) * 100;

         console.log(`Percentual de votos brancos: ${pBrancos}%.`);
      console.log(`Percentual de votos nulos: ${pNulos}%.`);
    console.log(`Percentual de votos válidos: ${pValidos}%.`);