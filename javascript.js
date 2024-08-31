
function add (num1, num2){
    return num1 + num2;
}

function minus (num1, num2){
    return num1 - num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    return num1 / num2;
}

function operate(num1, num2, operator){

    if (operator == "+"){
        display.textContent = add(num1, num2);
    }
    
    else if (operator == "-"){
        display.textContent = minus(num1, num2);
    }
    
    else if (operator == "/"){
        display.textContent = divide(num1, num2);
    }
    
    else if (operator == "*"){
        display.textContent = multiply(num1, num2);
    }
    
    else{
        console.log("You didn't enter the right operator. Now you sit here all sad.")
    }

    currentNumber = 1;

    num1 = display.textContent

    num2 = "";

    operator = "";

    console.log("num1: " + num1);
    console.log("num2: " + num2);
    
    
}

const display = document.querySelector("#display");

const buttons = document.querySelectorAll("button");

let num1 = "";

let num2 = "";

let currentNumber = 1;

let operator = "";

function clear(){

    num1 = "";

    num2 = "";

    currentNumber = 1;

    operator = "";

    display.textContent = "";
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {

      display.textContent += button.textContent;

      if (button.textContent == "="){
        if (operator != ""){
            operate (parseInt(num1), parseInt(num2), operator);
        }
      }

      else if (button.textContent == "CLR"){
        clear();
      }

      else if (("*/+-").includes(button.textContent)){
        operator = button.textContent;
        currentNumber = 2;
        num2 = "";
      }

      else{

        if (currentNumber == 1){
            console.log("num1 before: " + num1);
            num1 += button.textContent;
            console.log("num1 after: " + num1);
        }
        else{
            console.log("num2 before: " + num2);
            num2 += button.textContent;
            console.log("num2 after: " + num2);
        }
      }
    });
  });

