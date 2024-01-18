/*Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado. 

Código Condição de Pagamento:

1 - A vista Débito: 10% de desconto;
2 - A vista no dinheiro ou PIX: 15% de desconto;
3 - Em duas vezes: Preço normal da etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

let condicaoPagamento = 4;
const valorEtiqueta = 150;

if (condicaoPagamento === 1 ) {
    const vlFinal = valorEtiqueta - (valorEtiqueta * 0.10);
    console.log('Forma de pagamento selecionada: Débito. O valor Final é', precoEtiqueta * 0.);
} else if (condicaoPagamento === 2){
    const vlFinalPix = (valorEtiqueta - (valorEtiqueta * 0.15));
    console.log('Forma de pagamento selecionada: Pix. O valor Final é', vlFinalPix);
} else if (condicaoPagamento === 3){
    const vlFinal = valorEtiqueta;
    console.log('Forma de pagamento selecionada: Duas Vezes. O valor Final é ', vlFinal);
} else if (condicaoPagamento === 4){
    const vlFinal = valorEtiqueta + (valorEtiqueta * 0.10);
    console.log('Forma de pagamento selecionada: Três ou mais vezes. O valor final é', vlFinal);
} else {
    console.log('Forma de Pagamento inválida! Por favor, revise os dados.')
}