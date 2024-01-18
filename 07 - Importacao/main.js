
const {gets, print} = require('./funcoes-auxiliares');

const qtAlunos = gets();
let maiorValor = 0;

for (let i = 0; i < qtAlunos; i++) {
    const numeroSorteado = gets();
   if (numeroSorteado > maiorValor){
    maiorValor = numeroSorteado;
   }
}

print(maiorValor);