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

function checkResult (result) {
  if (result == "Cannot divide by zero") {
  console.log(result);
  operatorSymbol.forEach ((symbol) => symbol.disabled = true);
  }
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
const del = document.querySelector('#delete');
const clearAll = document.querySelector('.clear');
const decimalSeparator = document.querySelector('#decimal');
const btn = document.querySelector('button');

//** As the e.target.data.value cannot be reset to initial, decided to push the current value to an array
// Initialize the firstNum and secondNum variable after each eval
// Putting the condition where it results for the next condition to be true means it will also execute that statement. To correct this, larger value were switched so that it will be called and evaluated first. So that any values will be evaluated again on the next function call*/
operatorSymbol.forEach(btn => {
  btn.addEventListener('click', function(e){
    if (expression.at(-1) === '') {
      expression.splice(-1, 1);

    }
    if (expression.length >= 2 && secondNum != '') {
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
      expression.splice(1,1,operator );
      del.disabled = true;

    }
    checkDecimalSeparator(e.target);
    checkResult(result);
    

  }); 
} )

//Calling a function with eventListeners inside will need the function to be called each time a value will need  to be changed. Removed the listener inside the function and adds the conditional statement inside of it instead.
btns.forEach(btn => {
  btn.addEventListener('click', function(e){
    checkResult();
    del.disabled = false;
    
    if (expression.length < 1) {
      display.textContent = '';
      firstNum += e.target.dataset.value;
      display.textContent = firstNum;
      console.log(firstNum);
      checkDecimalSeparator(firstNum);

    }
    if (expression.length >= 2) {
      checkDecimalSeparator(secondNum)
      display.textContent = ''; 
      secondNum += e.target.dataset.value;
      display.textContent = secondNum;

      }
    })
  }
)

compute.addEventListener('click', function() {
  if (expression.length >= 2 && secondNum != '') {
    expression.push(secondNum);
    //secondNum = '';
    console.log(expression);
    evalExpression(expression);
    
    display.textContent = result;
    firstNum = result;
    expression.splice(0, 1, firstNum);


  }
  expression.splice(-1,1);//To prevent the operand from populating the array
  checkResult(result);

})

clearAll.addEventListener('click', reset);

function evalExpression(arr) {
  let a = arr[0];
  let b = arr[2];

  if (arr[1] == '*') {
    const num = multiply (a, b);
    return result = round (num, 9);

  }
  if (arr[1] == '/') {
    if (b == 0) {
      return result = "Cannot divide by zero";

    } else {
      const num = divide (a, b);
      return result = round (num, 9);

    }
  }
  if (arr[1] == '+') {
    const num = add (Number(a), Number(b));
    return result = round (num, 9);

  }
  if (arr[1] == '-') {
    const num = subtract (a, b);
    return result = round (num, 9);

  }
}

// **Removes the latest inputted number as displayed on the screen.
// If firstNum variable will not be reinitialize upon an '=' button pressed, the variable value will become e.target.dataset.value concatenated to the user input when the user resumes evaluating expressions.*/
del.addEventListener('click', (e) => {
  let displayText = display.textContent;
  if (expression.length < 1) {
    display.textContent = (displayText.slice (0, displayText.length -1));

    firstNum = display.textContent;
  }
  if (expression.length < 3 && expression.length > 0) {
    display.textContent = (displayText.slice (0, displayText.length -1));

    secondNum = display.textContent;
  }

  if (expression.length === 3) {
    expression = [];
    firstNum = '';
  }

});

function reset () {
  operatorSymbol.forEach ((symbol) => symbol.disabled = false);

  firstNum = '';
  secondNum = '';
  operator;
  expression = [];
  result = '';
  display.textContent = '0'; 

}

btn.addEventListener('click', function () {
  if (expression.length < 1) {
  checkDecimalSeparator(firstNum);

  }
  if (expression.length >= 2) {
  checkDecimalSeparator(secondNum);

  }

});

function checkDecimalSeparator (a) {
  if( /\./.test(a)){
    decimalSeparator.disabled = true;

  }
  else {
    decimalSeparator.disabled = false;

  }
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);

}
//Keyboard support
window.addEventListener("keydown", (event) => {
  const a = event.key;
  console.log(event.key);

  if (/^\d+$/.test(a)) {
    if (expression.length < 1){
      checkDecimalSeparator(secondNum)
      firstNum += `${event.key}`;
      display.textContent = firstNum;

    }
    if (expression.length >= 2) {
      checkDecimalSeparator(secondNum)
      display.textContent = ''; 
      secondNum += `${event.key}`;
      display.textContent = secondNum;
      
    }
  }
  if (/[\/\+\-\*]/.test(a)) {
    if (expression.at(-1) === '') {
      expression.splice(-1, 1);

    }
    if (expression.length >= 2 && secondNum != '') {
      expression.push(secondNum);
      evalExpression(expression);
      display.textContent = result;
      firstNum = result;
      expression.splice(0, 1, firstNum);
      operator = event.key;
      expression.splice(1,1,operator);
      console.log(expression);
      firstNum = '';
      secondNum = '';
  
    }
    if (expression.length < 2 ){
      operator = event.key;
      expression.push(firstNum, operator);
      firstNum = '';
  
    }
    if (expression.length = 2) {
      operator = event.key;
      expression.splice(1,1,operator );
      del.disabled = true;
  
    }
    checkDecimalSeparator(event.key);
    checkResult(result);
  }
  if (/=/.test(a) || a === 'Enter') {
    if (expression.length >= 2 && secondNum != '') {
      expression.push(secondNum);
      //secondNum = '';
      console.log(expression);
      evalExpression(expression);
      
      display.textContent = result;
      firstNum = result;
      expression.splice(0, 1, firstNum); 
  
    }
    expression.splice(-1,1);//To prevent the operand from populating the array
      
    checkResult(result);
  }
  if (a === '.') {
    if (expression.length < 1 && !/\./.test(firstNum)) {
      firstNum += `${event.key}`;
      display.textContent = firstNum;
      checkDecimalSeparator(firstNum);
    
      }
      if (expression.length >= 2 && !/\./.test(secondNum)) {
        secondNum += `${event.key}`;
      checkDecimalSeparator(secondNum);
    
      }
  }
  if (a === 'Backspace') {
    let displayText = display.textContent;
    if (expression.length < 1) {
      display.textContent = (displayText.slice (0, displayText.length -1));

      firstNum = display.textContent;
    }
    if (expression.length < 3 && expression.length > 0) {
      display.textContent = (displayText.slice (0, displayText.length -1));

      secondNum = display.textContent;
    }

    if (expression.length === 3) {
      expression = [];
      firstNum = '';
    }
  }
  
 
  }

);
