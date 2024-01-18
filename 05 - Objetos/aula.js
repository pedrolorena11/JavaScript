
class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
this.nome = nome;
this.idade = idade;
this.anoDeNascimento = 2024 - idade;

    }

     descrever() {
        console.log(`Meu nome é ${this.nome}, nasci em ${this.anoDeNascimento} e minha idade ${this.idade}.`);  
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
            console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
        }
}

 const pedro = new Pessoa('Pedro', 30);
/*pedro.nome= 'Pedro Lorena';
pedro.dataNascimento = '11/02/1994';
pedro.idade = 29;
pedro.cpf = '095.061.434-39';*/

const serena = new Pessoa('Serena',2);
/*serena.nome = 'Serena Pinheiro';
serena.dataNascimento = '11/02/1994';
serena.idade = 1;
serena.cpf = '180.469.964-08';*/

compararPessoas(pedro,serena);



 