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

calculate();

operatorSymbol.forEach(btn => {
  btn.addEventListener('click', function(e){
    operator = e.target.dataset.operator;

    calculate();
  }); 
} )
//As for the moment, until such time that the code can be much more concise and efficient, resorted to  adding functionality to the buttons. By adding an event listeners inside a function, a conditional statement is implemented to which variable a value will be assigned.
function calculate() {
  if (firstNum == '' && operator == undefined) {
    btns.forEach(btn => {
      btn.addEventListener('click', function(e){
        display.textContent = '';
        firstNum += e.target.dataset.value;
        display.textContent = firstNum;
      })
    }
  )
  } else {
    btns.forEach(btn => {
      btn.addEventListener('click', function(e){
        display.textContent = '';
        secondNum += e.target.dataset.value;
        display.textContent = secondNum;
      })
    }
  )

  }
}
