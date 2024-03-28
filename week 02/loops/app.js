console.log("Hello world!");

for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}
let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}
let keepLooping = true;
let i = 0;
while (keepLooping === true) {
  console.log("Iteration", i)
  keepLooping = Math.random() < 0.1;
  i++;
}

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

const foods1 = ["pizza", "chocolate", "ice cream", "cheese"];
for (let food of foods1) {
  console.log(food);
}
 
const favouriteNumbers = [4, 8, 15, 16, 23, 42, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}
