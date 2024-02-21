const elementoChute = document.querySelector('#chute'); 

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();
recognition.addEventListener('result', onSpeak)

const palavrasDeReset = [
  'reiniciar',
  'novo jogo',
  'jogar novamente'
]

function onSpeak(event){
  const chute = event.results[0][0].transcript;
  reiniciarPorVoz(chute);
  exibeChuteNaTela(chute);
  verificaSeOChutePossuiValorValido(chute);
}

function reiniciarPorVoz(transcrito){

  let contador = 0;
  palavrasDeReset.forEach(p => {
    if(p === transcrito){
      contador++;
    }
  })

  if(contador === 0){
    return;
  }

  window.location.reload();
}

function exibeChuteNaTela(chute){
  elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
  `
}

recognition.addEventListener('end', () => recognition.start());