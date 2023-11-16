const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',

];


ingredients.forEach((ingredient)=>{
  const ulIten = document.querySelector("#ingredients");
  const liItem = document.createElement("li");
  liItem.textContent = ingredient;

  ulIten.append(liItem)
  // console.log(liItem);
  console.log(liItem)
})

