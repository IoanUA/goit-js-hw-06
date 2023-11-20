
const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
span.style.fontSize = `${input.value}px`
input.addEventListener('input', onChangeFontSize);


function onChangeFontSize(event){
    const currentValue = event.target.value;
    span.style.fontSize = `${currentValue}px`
}











