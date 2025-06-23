const menorValor = 1;
const maiorValor = 1000;
const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorValor = document.getElementById('maior-valor');
const numeroSecreto = gerarNumeroAleatorio();
elementoMaiorValor.innerHTML = maiorValor;
elementoMenorValor.innerHTML = menorValor;

function gerarNumeroAleatorio(){
    return parseInt(Math.floor(Math.random() * (maiorValor - menorValor + 1) ) + menorValor);
}
