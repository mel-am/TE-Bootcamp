console.log("Hello objects methods");

const person = {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
    sayHello: function () {
      console.log("Hello!");
    },
  };
  
person.sayHello(); // Output: Hello!
  

//Advert
const car = {
    make: "Telsa",
    model: "S",
    color: "Danger Red",
    advert: function () {
        return `Wow, you can buy this amazing ${car.make} ${car.model}, in the colour of the year ${car.color}. Remember snooze you lose on this deal!`;
    },
};

const carAd = car.advert();

console.log(carAd);

const book = {
    title: "My best Book'",
    author: "The Best",
    numberOfPages: "2000",
    bookAdvert: function () {
        return `You really need to buy ${book.title}. It is by the one and only ${book.author}, who is amazing! You will love reading the all of the ${book.numberOfPages} pages.`;
    },
};

const bookAd = book.bookAdvert();
console.log(bookAd);
