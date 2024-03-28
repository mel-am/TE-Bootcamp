console.log("Calculator")

// add

function add(a, b) {
    console.log("adding");
    return a + b;
}

//subtract
function subtract(a, b) {
    console.log("subtracting");
    return a - b;
}

//multiply

function multiplying(a, b) {
    console.log("multiplying");
    return a * b;
}

//divide

function divide(a, b) {
    console.log("dividing");
    return a / b;
}

//calculate

function calculate(a, b, operator) {
    swtich(operator){
    case "+"
        return a + b;
    case "-"
        return a - b;
    case "*"
        return a * b;
    case "/"
        return a + b;
    }
}

//with callback function

function calculate(a, b, operation) {
    const result = operation (a, b);
    console.log(result);

}
calculate(3, 6, add);
calculate(9, 9, multiply);