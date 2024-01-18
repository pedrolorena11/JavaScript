/* Formula IMC 
Peso / (altura * altura)

Elabora um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

 - Abaixo de 18.5: abaixo do peso;
 - Entre 18.5 e 25: peso normal;
 - Entre 25 e 30: Acima do peso;
 - Entre 30 e 40: Obeso; 
 - Acima de 40 Obesidade Grave; */

let altura;
let peso;

peso = 104.90;
altura = 1.88;

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log(imc.toLocaleString(2), 'Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log(imc.imc.toLocaleString(2), 'Peso Normal');
} else if (imc >= 25 && imc < 30) {
    console.log(imc.toLocaleString(2), 'Acima do Peso');
} else if (imc >= 30 && imc < 40) {
    console.log(imc.toLocaleString(2), 'Obeso');
}
    else {
    console.log(imc.toLocaleString(2), 'Obersidade Grave');
}