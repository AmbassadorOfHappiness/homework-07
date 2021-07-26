
// document.getElementById('name-input').onkeyup = function() {
//   document.getElementById('name-output').innerHTML = this.value;
// } 

//   let input = document.getElementById("name-input");
//   let nameOutput = document.getElementById("name-output");


// input.oninput = function () {
//     if (input.value === '') {
//        nameOutput.innerHTML = 'незнакомец';
//     } else{
//     nameOutput.innerHTML = input.value;
//     }
// }

const nameInput= document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");


const onInputChange = event => {
  nameOutput.textContent = nameInput.value ? nameInput.value : 'незнакомец';
};

nameInput.addEventListener('input', onInputChange);
