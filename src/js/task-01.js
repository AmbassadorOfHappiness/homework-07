const ul = document.querySelector('#categories').children;
for (let elem of ul) {
    const category = elem.firstElementChild.textContent;   
    const quantityElem = elem.lastElementChild.children.length;
    console.log(`Категория: ${category} \n Количество элементов: ${quantityElem}`);
};

