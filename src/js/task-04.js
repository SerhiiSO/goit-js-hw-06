const decrementBtn = document.querySelector('[data-action = "decrement"]');
const incrementBtn = document.querySelector('[data-action = "increment"]');
let counter = 0;
const counterValue = document.querySelector('#value');

function decrementBtnClick() {
    counter -= 1;
   counterValue.textContent = counter;
}   
decrementBtn.addEventListener('click', decrementBtnClick);


function incrementBtnClick() {
    counter += 1;
   counterValue.textContent = counter;
}   
incrementBtn.addEventListener('click', incrementBtnClick);
