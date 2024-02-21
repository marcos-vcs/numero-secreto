const elementoChute = document.querySelector('#chute'); 

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(event){
  console.log(event);
  const chute = event[0][0].transcription;
  exibeChuteNaTela(chute);
}

function exibeChuteNaTela(chute){
  elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
  `
}