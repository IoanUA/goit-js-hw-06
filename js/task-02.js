const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',

];
//   const ulIten = document.querySelector("#ingredients");
//   const liItem = document.createElement("li");

// ingredients.forEach((ingredient)=>{

//   liItem.textContent = ingredient;

//   ulIten.append(liItem)
//   // console.log(liItem);
//   console.log(liItem)
// })




const ulItem = document.querySelector("#ingredients");

const nameIngred = [] ;

ingredients.forEach((ingredient)=>{
  const liItem = document.createElement("li"); 
  liItem.textContent = ingredient;
  nameIngred.push(liItem)
  console.log(liItem);

})

 ulItem.append(...nameIngred)

