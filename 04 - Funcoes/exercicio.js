function escreveSeuNome(nome){
    console.log('Meu nome é', nome);
}

escreveSeuNome('Pedro');
escreveSeuNome('Henrique');

function verificaIdade(idade){
    if( idade >= 18){
        console.log('Maior de Idade.', idade);
    }
    else {
        console.log('Menor de Idade.', idade)
    }
}

verificaIdade(29);
verificaIdade(15);
