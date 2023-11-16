const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let correctValue = 0;



buttonDecrement.addEventListener('click', onDecrementvalue);
buttonIncrement.addEventListener('click', onIncrementValue)

function onDecrementvalue(){
correctValue -= 1;
value.textContent = correctValue;
};

function onIncrementValue(){
    correctValue += 1;
   value.textContent = correctValue;
}