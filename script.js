function add(a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a/b;
}

let firstNum = 0;
let secondNum;
let operator;

const btns = document.querySelectorAll('button');
const display = document.querySelector('#display');

btns.forEach(btn => {
  btn.addEventListener('click', function(e){
    firstNum += e.target.dataset.value;
    display.textContent = firstNum;
  })
})