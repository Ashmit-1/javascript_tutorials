if (2 !== "2") {         
    console.log("The code is executed!!");
}
else{
    console.log("The code is not executed !!");
}

let userScore = 50
if (userScore > 100) {
    let userPower = "swim"
    console.log(`The user power is ${userPower}`);
} else {
    console.log(`User doesn't any power `);
    
}
let operator = "*"

switch (operator) {
    case "+" :
        addition(5, 6)
        break;
    
    case "-":
        subtraction(10, 5)
        break;
    
    case "*":
        multiplication(10, 5)
        break;
    case "/":
        division(10, 5)
        break;

    default:
        console.log("Enter a valid operand");
        break;
}

function addition(a, b) {
    console.log(a + b); 
}

function subtraction(a, b) {
    console.log(a - b);
    
}

function multiplication(a, b) {
    console.log(a * b);
    
}

function division(a, b) {
    console.log(a / b);
    
}

//Ternary Operator

let marks = 7

marks >= 40 ? console.log("Student passed the exam") : console.log("Student failed the exam");
