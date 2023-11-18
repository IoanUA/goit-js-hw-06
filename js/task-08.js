//----------------------------------option - 1-------------------------------------//

// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event){
// event.preventDefault();
 
// const formData = new FormData(event.currentTarget);
// formData.forEach((email, pass)=>{

//   if (email === "") {
//    alert('Все поля должны быть заполнены')
//  } 
//     console.log(email);
//     console.log(pass)

//     form.reset();
// })
// }


//----------------------------------option - 2-------------------------------------//

const form = document.querySelector('.login-form');

form.addEventListener('submit', getValueOnForm);


function getValueOnForm(event){
event.preventDefault();

const formElements = event.currentTarget.elements;

const email = formElements.email.value;
const password = formElements.password.value;
   
    if(email ==="" || password ===""){
        alert('все поля должны быть заполнены')
    }
    const getObject = {
        email,
        password,
    }
    form.reset()
console.log(getObject);
}