const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];  

let ulLi = document.getElementById("ingredients");
const list = ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  items.textContent = ingredient;
  ulLi.append(items);
});

