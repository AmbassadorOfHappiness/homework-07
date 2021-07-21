const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];  

const elements = document.querySelector('#ingredients');
 
const list = ingredients.reduce((str, item) =>  str + `<li>${item}</li>`, '');

elements.innerHTML = list;