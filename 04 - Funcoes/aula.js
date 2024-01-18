/*function incrementarJuros(valor, percentualJuros){
    const valorDeAcrecimo = (percentualJuros / 100 * valor);
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(300,50));
console.log(incrementarJuros(300,25));
console.log(incrementarJuros(300,5));*/

function calcularImc(peso, altura){ 
   return peso / (altura * altura);
}

function classificarImc (imc){
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso Normal';
    } else if (imc >= 25 && imc < 30) {
      return 'Acima do Peso';
    } else if (imc >= 30 && imc < 40) {
       return 'Obeso';
    }
        else {
       return 'Obersidade Grave';
    }
}
//Main - Código Principal
(function (){
let peso = 104.90;
let altura = 1.88;
let imc = calcularImc(peso,altura);
console.log(classificarImc(imc),'- IMC é:', calcularImc(peso,altura).toLocaleString(2));
})();


