
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
        console.log(add(num1, num2));
    }
    
    else if (operator == "-"){
        console.log(minus(num1, num2));
    }
    
    else if (operator == "/"){
        console.log(divide(num1, num2));
    }
    
    else if (operator == "*"){
        console.log(multiply(num1, num2));
    }
    
    else{
        console.log("You didn't enter the right operator. Now you sit here all sad.")
    }
}

/*
let num1 = parseInt(prompt("Enter number 1: "));

let num2 = parseInt(prompt("Enter number 2: "))

let operator = prompt("Enter the operator (+, -, /, *): ")

operate(num1, num2, operator);
*/

