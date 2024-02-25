let qtdChance = 15;

function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute;
    const jogo = document.querySelector('#jogo');

    if(chuteForInalido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido</div>`
        return;
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `
        <div>
        Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}
        </div>`
        return;
    }

    if(numero === numeroSecreto){
        jogo.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
        initConfetti();
    }else if(numero > numeroSecreto){
        qtdChance--;
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        <div class="placar ${qtdChance <= 5 ? 'placar-final' : ''}">
            ${qtdChance <= 5 ? 'Você tem somente' : 'Você ainda tem'}
            ${qtdChance} 
            ${qtdChance === 1 ? 'chance': 'chances'}.
            ${calculaEmojiPlacar()}
        </div>
        `
    }else{
        qtdChance--;
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        <div class="placar ${qtdChance <= 5 ? 'placar-final' : ''}">
            ${qtdChance <= 5 ? 'Você tem somente' : 'Você ainda tem'}
            ${qtdChance} 
            ${qtdChance === 1 ? 'chance': 'chances'}.
            ${calculaEmojiPlacar()}
        </div>
        `
    }

    if(qtdChance === 0){
        document.body.classList.add('game-over');
        jogo.innerHTML = `
            <h2>Você perdeu! <i class="fa-regular fa-face-sad-tear"></i></h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
        return;
    }

}

function calculaEmojiPlacar(){
    const emojiFeliz = '<i class="fa-regular fa-face-laugh"></i>';
    const emojiNeutro = '<i class="fa-regular fa-face-meh"></i>';
    const emojiTriste = '<i class="fa-regular fa-face-grimace"></i>';
    const emojiDizzy = '<i class="fa-regular fa-face-dizzy"></i>';

    if (qtdChance >= 10) {
        return emojiFeliz;
    } else if (qtdChance > 6) {
        return emojiNeutro;
    } else if (qtdChance > 3) {
        return emojiTriste;
    } else {
        return emojiDizzy;
    }
}

function chuteForInalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})
