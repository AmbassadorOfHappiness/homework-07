let valueEl = Number(document.querySelector('#value').textContent);

const counterValue = document.querySelector('#value');

const incrBtn = document.querySelector('#counter').lastElementChild.addEventListener('click', event => {
  valueEl += 1;
  counterValue.innerText = valueEl;
});
const decrBtn = document.querySelector('#counter').firstElementChild.addEventListener('click', event => {
  valueEl -= 1;
  counterValue.innerText = valueEl;
});



