/* Faça um algorítimo que dado as 3 notas tiradas por um aluno de um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3)/3;

Classificação:
- Media menor que 5: reprovado
- Méida entre 5 e 7: recuperação;
- Média acima de 7: Aprovado.*/

let nota1;
let nota2;
let nota3;

nota1 = 11;
nota2 = 11;
nota3 = 11;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log (media, 'Reprovado!');
} else if(media >= 5 && media <=7) {
    console.log(media, 'Em Recuperação'); 
} else if (media >7 && media <=10){
    console.log(media, 'Aprovado!');
} else {console.log('Média inválida! Por favor revise as notas lançadas.');
}

