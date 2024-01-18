/*
1 - Crie uma classe qpara representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
Crie um metodo que dado a quantidade de KM e o preço do Combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    desempenhoPorKm;

    constructor(marca,cor,desempenhoPorKm){
    this.marca = marca;
    this.cor = cor;
    this.desempenhoPorKm = desempenhoPorKm;}

    calcularViagem(distanciaEmKm,precoCombustivel){
        return (distanciaEmKm * this.desempenhoPorKm) * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'amarelo', 1/15);
const ix35 = new Carro('Hyundai','preto',1/11);

uno.calcularViagem(70,5);
console.log(uno.calcularViagem(298,5.99));
console.log(ix35.calcularViagem(298,5.99));