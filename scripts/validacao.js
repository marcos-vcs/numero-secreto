function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute;

    if(chuteForInalido(numero)){
        console.log('Valor inválido');
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        console.log(`Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`);
    }

}

function chuteForInalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}
