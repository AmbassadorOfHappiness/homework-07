const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];  

const ulLi = document.getElementById("ingredients");

const listIngredients = ingredients.map(ingredient => {
    let items = document.createElement('li');
    items.textContent = ingredient;
    return items;
});
ulLi.append(...listIngredients);


