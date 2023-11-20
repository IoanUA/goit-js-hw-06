const textInput = document.querySelector('#name-input');
const span = document.querySelector('#name-output');


textInput.addEventListener('input', onShowInputText);

function onShowInputText(){
    span.textContent = textInput.value

    if(textInput.value.trim() === ""){
    span.textContent = "Anonimys"
}
}
