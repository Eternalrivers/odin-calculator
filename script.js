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

let firstNum = '';
let secondNum = '';
let operator;

const btns = document.querySelectorAll('.digit');
const display = document.querySelector('#display');
const calc = document.querySelector('#Calculator');
const operatorSymbol = document.querySelectorAll('.symbol');

btns.forEach(btn => {
  btn.addEventListener('click', function(e){
    display.textContent = '';
    firstNum += e.target.dataset.value;
    display.textContent = firstNum;
  })
}
)

operatorSymbol.forEach(btn => {
  btn.addEventListener('click', function(e){
    operator = e.target.dataset.operator;

  }); 
} )
