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
let result;


const btns = document.querySelectorAll('.digit');
const display = document.querySelector('#display');
const calc = document.querySelector('#Calculator');
const operatorSymbol = document.querySelectorAll('.symbol');
const compute = document.querySelector('.compute');


//** As the e.target.data.value cannot be reset to initial, decided to push the current value to an array
// Initialize the firstNum and secondNum variable after each eval
// Putting the condition where it results for the next condition to be true means it will also execute that statement. To correct this, larger value were switched so that it will be called and evaluated first. So that any values will be evaluated again on the next function call*/
operatorSymbol.forEach(btn => {
  btn.addEventListener('click', function(e){
    if (expression.at(-1) === '') {
      expression.splice(-1, 1);
      }
    if (expression.length >= 2 && secondNum != ''
    ) {
      expression.push(secondNum);
      evalExpression(expression);
      display.textContent = result;
      firstNum = result;
      expression.splice(0, 1, firstNum);
      operator = e.target.dataset.operator;
      expression.splice(1,1,operator);
      console.log(expression);
      firstNum = '';
      secondNum = '';
    }
    if (expression.length < 2 ){
      operator = e.target.dataset.operator;
      expression.push(firstNum, operator);
      firstNum = '';
    }
    if (expression.length = 2) {
      operator = e.target.dataset.operator;
      expression.splice(1,1,operator )
    }
  }); 
} )

//Calling a function with eventListeners inside will need the function to be called each time a value will need  to be changed. Removed the listener inside the function and adds the conditional statement inside of it instead.
btns.forEach(btn => {
  btn.addEventListener('click', function(e){
    if (expression.length < 1) {
      display.textContent = '';
        firstNum += e.target.dataset.value;
      display.textContent = firstNum;
      console.log(firstNum);
    }
    if (expression.length >= 2) {
      display.textContent = ''; 
      secondNum += e.target.dataset.value;
      display.textContent = secondNum;
      }
    })
  }
)
 
compute.addEventListener('click', function() {
  expression.push(secondNum);
  secondNum = '';
  console.log(expression);
  evalExpression(expression);
  display.textContent = result;
  firstNum = result;
  expression.splice(0, 1, firstNum);
})

function evalExpression(arr) {
  let a = arr[0];
  let b = arr[2];

  if (arr[1] == '*') {
    return result = multiply (a, b);
  }
  if (arr[1] == '/') {
    return result = divide (a, b);
  }
  if (arr[1] == '+') {
    return result = add (Number(a), Number(b));
  }
  if (arr[1] == '-') {
    return result = subtract (a, b);
  }
  
  return Number(result.toFixed(9));
}