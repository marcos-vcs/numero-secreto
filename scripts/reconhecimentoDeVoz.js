const elementoChute = document.querySelector('#chute'); 

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(event){
  const chute = event.results[0][0].transcript;
  reiniciarPorVoz(chute);
  exibeChuteNaTela(chute);
  verificaSeOChutePossuiValorValido(chute);
}

function reiniciarPorVoz(transcrito){
  console.log(transcrito);
  if(transcrito.toString().toLowerCase() != 'reiniciar' || 
     transcrito.toString().toLowerCase() != 'novo jogo'){
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