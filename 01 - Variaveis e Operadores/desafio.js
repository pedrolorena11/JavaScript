/* Fala um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do Combustível;
2 - Gasto Médio de Combustível do carro por MediaKeyMessageEvent;
3 - Distância em KM da viagem.
*/


let precoCombustivel; 
let consumoMedioLitros;
const distanciaEmKm = 300;

precoCombustivel = 5.99;
consumoMedioLitros = 15;
/*distanciaEmKm = 300;*/

let valorGasto = distanciaEmKm / consumoMedioLitros * precoCombustivel;

console.log(valorGasto.toFixed(2));