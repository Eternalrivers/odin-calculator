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
let expression = [];

const btns = document.querySelectorAll('.digit');
const display = document.querySelector('#display');
const calc = document.querySelector('#Calculator');
const operatorSymbol = document.querySelectorAll('.symbol');
const compute = document.querySelector('.compute');

variableAssignment();

//As the e.target.data.value cannot be reset to initial, decided to push the current value to an array
operatorSymbol.forEach(btn => {
  btn.addEventListener('click', function(e){
    operator = e.target.dataset.operator;
    expression.push(firstNum, operator);

    variableAssignment();
  }); 
} )

//As for the moment, until such time that the code can be much more concise and efficient, resorted to  adding functionality to the buttons. By adding an event listeners inside a function, a conditional statement is implemented to which variable a value will be assigned
function variableAssignment() {
  if (firstNum == '') {
    btns.forEach(btn => {
      btn.addEventListener('click', function(e){
        display.textContent = '';
        firstNum += e.target.dataset.value;
        display.textContent = firstNum;
        console.log(firstNum);
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


compute.addEventListener('click', function() {
  expression.push(secondNum);
  console.log(expression);
})