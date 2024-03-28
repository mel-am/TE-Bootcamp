// // console.log("Hello World!");

// // //Create some additional mathematical operation functions that you can pass in to your calculator function. You could try dividing and subtracting, you could try comparing two numbers to see if they're the same and return the result.

// // // logs a string to the console to tell the user the function was called
// // function notifyUser() {
// //     console.log("notifyUser function was called!");
// // }

// // // accepts a function as an argument to run when it has done it's work
// // function myAwesomeFunction(notifyUserCallback) {
// //     console.log("Running myAwesomeFunction... doing complex tasks...");
// //     console.log("Complex task complete. I will notify the user");
// //     notifyUserCallback();
// // }

// // // run the awesome function, and pass thenotifyUser function to it
// // myAwesomeFunction(notifyUser);

// // function myAwesomeFunction(onCompleteCallback) {
// //     console.log("Running myAwesomeFunction... doing complex tasks...");
// //     console.log("Complex task complete. I will notify the user");
// //     onCompleteCallback();
// // }
// // myAwesomeFunction(function () {
// //     console.log("notifyUser function was called!");
// // });

// // myAwesomeFunction(() => {
// //     console.log("notifyUser function was called!");
// // });

// // function myAwesomeFunction(onSuccessCallback, onFailureCallback) {
// //     console.log("Running myAwesomeFunction... doing complex tasks...");
// //     console.log("Complex task complete. I will notify the user");

// //     // randomly choose if success is true or false
// //     const success = Math.random() > 0.5;
// //     if (success) {
// //       onSuccessCallback({
// //         message: "This is the message of success",
// //       });
// //     } else {
// //       onFailureCallback();
// //     }
// //   }

// //   myAwesomeFunction(
// //     (data) => {
// //       console.log("It was successful: ", data.message);
// //     },
// //     () => {
// //       console.log("It failed :(");
// //     }
// //   );

// //   function onAwesomeSuccess(data) {
// //     console.log("It was successful: ", data.message);
// //   }

// //   function onAwesomeFailure() {
// //     console.log("It failed :(");
// //   }

// // myAwesomeFunction(onAwesomeSuccess, onAwesomeFailure);

// function add(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function myCalculatorFunction(a, b, operationCallback) {
//   console.log("Doing a calculation using the numbers: ", a, b);
//   console.log(
//     "We might have code that saves the result to a log or a database"
//   );

//   return operationCallback(a, b);
// }
// const result = myCalculatorFunction(1, 2, add);
// console.log(result); // Output: 3

// const result2 = myCalculatorFunction(2, 3, multiply);
// console.log(result2); // Output: 6

// // add the two results together
// const finalResult = myCalculatorFunction(result, result2, add);
// console.log(finalResult); // Output: 9
// button.addEventListener("click", handleClick);

// function add(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function myCalculatorFunction(a, b, operationCallback) {
//   console.log("Doing a calculation using the numbers: ", a, b);
//   console.log(
//     "We might have code that saves the result to a log or a database"
//   );

//   return operationCallback(a, b);
// }
// const result = myCalculatorFunction(1, 2, add);
// console.log(result); // Output: 3

// const result2 = myCalculatorFunction(2, 3, multiply);
// console.log(result2); // Output: 6

// // add the two results together
// const finalResult = myCalculatorFunction(result, result2, add);
// console.log(finalResult); // Output: 9
// button.addEventListener("click", handleClick);


function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function myCalculatorFunction(a, b, operationCallback) {
    console.log("Doing a calculation using the numbers: ", a, b);
    console.log(
      "We might have code that saves the result to a log or a database"
    );
  
    return operationCallback(a, b);
  }
  const result = myCalculatorFunction(10, 20, subtract);
  console.log(result); // Output: 1
  
  const result2 = myCalculatorFunction(30, 6, divide);
  console.log(result2); // Output: 6
  
  // subtract the two results together
  const finalResult = myCalculatorFunction(result, result2, subtract);
console.log(finalResult); // Output: 9


// We've already seen callback functions, lets revist that!
const hilariousBtn = document.getElementById("hilariousBtn");

hilariousBtn.addEventListener("click", function () {
  console.log("poop");
});

// callback functions don't have to be annonymous
function changeBG() {
  document.body.style.backgroundColor = "tomato";
}

const bgBtn = document.getElementById("bg");

bgBtn.addEventListener("click", changeBG);