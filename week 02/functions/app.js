console.log('Hello world');


function sayHello() {
    console.log("Hello world!");
}

sayHello(); // Output: Hello world!
sayHello(); // Output: Hello world!
sayHello(); // Output: Hello world!

function argumentFunction(argument1, argument2) {
    console.log(argument1, argument2);
}

function sayHelloTo(name) {
    console.log("Hello " + name + "!");
}

sayHelloTo("Mark");
sayHelloTo("Jane");
sayHelloTo("Mer");

function greet(greeting, name) {
    console.log(greeting + " " + name + "!");
  }
  
  greet("Good morning", "Bob"); // Output: Good morning Bob!
  greet("Buenos dias", "Alice"); // Output: Buenos dias Alice!
greet("Bonjour", "Charlie"); // Output: Bonjour Charlie!
  
function add(a, b) {
    return a + b;
}

const result = add(1, 5); //add
console.log("The result is", result);
const anotherResult = add(2, 10);
console.log("Another results is", anotherResult);


// subtract
function subtract(a, b) {
    return a - b;
}

//multiply
function multiply(c, d) {
    let product = c * d;
    return c * d;
}
    const result2 = multiply(1, 5); 
    console.log("The result is", result);
    const anotherResult2 = multiply(2, 10);
    console.log("Another results is", anotherResult);

//divide
function divide(a, b) {
    let product = a / b;
    return a * b;
    }

//calulate

function calculate(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);

    }
}

const result3 = calculate(10, 5, "+");
console.log("The result is", result3); // Output: The result is 6

const anotherResult3 = calculate(8, 10, "*");
console.log("Another result is", anotherResult3); // Output: Another result is 20