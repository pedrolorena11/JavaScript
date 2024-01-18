/*Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos: Nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu imc (Peso / (altura*altura);
Instancie uma pessoa chamada José que tenha 70kg e 1,75 de altura e peça ao José dizer o valor do seu IMC;*/

class Pessoa1 {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }
    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ( 'Peso Normal');
        } else if (imc >= 25 && imc < 30) {
            return ( 'Acima do Peso');
        } else if (imc >= 30 && imc< 40) {
            return ( 'Obeso');
        } else {
            return ( 'Obersidade Grave');
        }

    }

}


const jose = new Pessoa1('jose', 70, 1.75);
console.log(jose.classificarImc());
const pedro = new Pessoa1('Pedro', 104.90, 1.87);
console.log(pedro.classificarImc());