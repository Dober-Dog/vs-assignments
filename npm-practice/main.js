const readline = require("readline-sync")

function addition(num1, num2){
    let answer = num1 + num2
    console.log("The result is " + answer)
}


function subtract(num1, num2){
    let answer = num1 - num2
    console.log("The result is " + answer)
}

function mult(num1, num2){
    let answer = num1*num2
    console.log("The result is " + answer)
}

function divide(num1, num2){
    let answer = num1/num2
    console.log("The result is " + answer)
}

let num1 = Number(readline.question("What is the first number? "))
let num2 = Number(readline.question("What is the second number? "))
let validAnswer = false
while (validAnswer == false){
    let operation = readline.question("Add, sub, mult, or div? (please answer in lowercase) ")
    if(operation == "add"){
        validAnswer = true
        addition(num1, num2)
    } else if(operation == "sub"){
        validAnswer = true
        subtract(num1, num2)
    } else if(operation == "mult"){
        validAnswer = true
        mult(num1, num2)
    } else if(operation == "div"){
        validAnswer = true
        divide(num1, num2)
    } else{
        console.log("Sorry, that's not a valid operation.")
    }
}
