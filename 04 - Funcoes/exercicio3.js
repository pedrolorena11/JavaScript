let nota1 = 7;
let nota2 = 8;
let nota3 = 3;

function calcularMedia(nota1,nota2,nota3){
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}

if (media < 5) {
    console.log(calcularMedia(nota1,nota2,nota3), 'Reprovado!');
} else if(media >= 5 && media <=7) {
    console.log(calcularMedia(nota1,nota2,nota3), 'Em Recuperação'); 
} else if (media >7 && media <=10){
    console.log(calcularMedia(nota1,nota2,nota3), 'Aprovado!');
} else {console.log('Média inválida! Por favor revise as notas lançadas.');
}

