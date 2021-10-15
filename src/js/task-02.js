const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");

const liOfElements = ingredients.map(ingridient => {
  const element = document.createElement("li");
  element.textContent = ingridient;
  element.classList.add("item");
  console.log(element);
  return element;
  
})
ingredientsList.append(...liOfElements);