
const categLeng = categories.children.length;
console.log(`Number of categories: ${categLeng}`)

const categoriesList = document.querySelectorAll("#categories .item");

categoriesList.forEach((item)=>{
    const text = item.querySelector("h2").textContent;
    const ItemLeng = item.querySelectorAll("li").length;
    
    console.log(`Category: ${text}`);
    console.log(`Elements: ${ItemLeng}`);
})
