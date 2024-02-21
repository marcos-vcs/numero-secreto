const elementoChute = document.querySelector('#chute'); 

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(event){
  const chute = event.results[0][0].transcript;
  exibeChuteNaTela(chute);
}

function exibeChuteNaTela(chute){
  elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
  `
}