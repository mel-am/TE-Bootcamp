console.log("Hello World of Loops");

const person = {
    name: "Sam",
    age: 50,
    favouriteColour: "orange",
  };
  
console.log(person);
console.table(person);
  

const person1 = {
    name: "Mark",
    age: 27,
    favouriteColour: "lavender",
  };
  

console.log(person1.name); 
console.log(person1.age); 
console.log(person1.favouriteColour); 
console.table(person1);

const person3 = {
    name: "Watson",
    age: 50,
    favouriteColour: "Green",
  };
  
  person3.favouriteFood = "fish";
  
console.log(person3.favouriteFood);
console.table(person3);

const car = {
    make: "VW",
    model: "Golf",
    color: "silver",
}

console.log(car.make);
console.log(car.color);
console.table(car);

console.log(" Are you looking for a", (car.color), "car?", " Well this is your lucky day! For one day you,could be the proud owner of this", (car.color), (car.make), (car.model), "- Hurry whilst stocks last!");

const advert = `Are you looking for a ${car.color}, car? Well this is your lucky day! For one day you,could be the proud owner of this ${car.color}, ${car.make}, ${car.model}, - Hurry whilst stocks last!`;

console.log(advert);

const book = {
    title:"One Day",
    author: "David Nicholls",
    numberOfPages: "449",
}
console.log("You may of watched the TV series on Netflix's, now buy the book", (book.title), "written by", (book.author), (book.title), "has been described as a",(book.numberOfPages), "page emotional-rollercoaster! Don't miss out! ");

const advert2 = `You may of watched the TV series on Netflix's, now buy the book ${book.title} written by ${book.author} ${book.title}, has been described as a ${book.numberOfPages} page emotional-rollercoaster! Don't miss out!`;
console.log(advert2);