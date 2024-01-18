const notas= [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(8);
notas.push(5);

let soma = 0;

//const soma = notas [0] + notas [1] + notas [2] + notas [3] + notas [4];
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma= soma + nota;
    
}
const media = soma / notas.length;
console.log(media);



