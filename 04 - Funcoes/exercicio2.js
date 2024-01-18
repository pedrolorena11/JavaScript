/*Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado. 

Código Condição de Pagamento:

1 - A vista Débito: 10% de desconto;
2 - A vista no dinheiro ou PIX: 15% de desconto;
3 - Em duas vezes: Preço normal da etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

function aplicarDesconto(valor,desconto){
    return valor - (valor * (desconto / 100 ));
}

function aplicarJuros(valor,juros){
    return valor + (valor *(juros/100));
}

let condicaoPagamento = 1;
const valorEtiqueta = 100;

if (condicaoPagamento === 1 ) {
    console.log('Forma de pagamento selecionada: Débito. O valor Final é', aplicarDesconto(valorEtiqueta,10));
} else if (condicaoPagamento === 2){
    console.log('Forma de pagamento selecionada: Pix ou Dinheiro. O valor Final é',aplicarDesconto(valorEtiqueta,15));
} else if (condicaoPagamento === 3){
    console.log('Forma de pagamento selecionada: Crédito 2x. O valor Final é', aplicarDesconto(valorEtiqueta));
} else if (condicaoPagamento === 4){
    console.log('Forma de pagamento selecionada: Crédito 3x ou mais. O valor Final é', aplicarJuros(valorEtiqueta,10));
} else {
    console.log('Forma de Pagamento inválida! Por favor, revise os dados.')
}