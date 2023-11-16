const input = document.querySelector('#validation-input');

input.addEventListener('blur', ()=>{
    const currentValue = Number(input.getAttribute('data-length'));
    const textValue = input.value.length;

    if(currentValue === textValue){
        input.classList.add('valid')
        input.classList.remove('invalid')
    }else{
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
   
});



