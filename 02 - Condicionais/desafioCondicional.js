/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáreis. Sendo elas:
1 - Preço do Etanol;
2 - Preço da Gasolina;
3 - O tipo do comustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem; 

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoEtanol = 5.29;
const precoGasolina = 5.99;
const tipoCombustivel = 'Gasolina';
const consumoMedioLitros = 12;
const distanciaEmKm = 300;

const litrosConsumidos = distanciaEmKm / consumoMedioLitros;

if (tipoCombustivel === 'Gasolina') {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
} else { const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2)); }

