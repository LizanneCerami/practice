// let raceNumber = Math.floor(Math.random() * 1000);
// let earlyRegister = true;
// let runnerAge = 34;

// if(earlyRegister && runnerAge >= 18){
//   raceNumber += 1000;
// }
// if(earlyRegister && runnerAge > 18) {
//   console.log(`The race will begin at 9:30, your race number is ${raceNumber}`);
// }


 
// // ~~~~ PRACTICE ~~~~

// // 1. Create a function that takes in a number as a parameter and prints the square of that number.

// // 2. Create a function that takes in two numbers and prints which number is larger.

// // 3. Write a function that converts weeks into hours. Return the result. Invoke the function.

// function convertWeeksToHours(weeks){
//   const days = weeks * 7;
//   const hours = days * 24;
//   return hours;
// }

// const totalHours = convertWeeksToHours(5);
// console.log(totalHours);





// Create an object with your name, age and indicate (as a boolean) whether or not you are feeling confident (isFeelingConfident: value). 

const assessLiz = {
  name: "Liz",
  age: 34,
  isFeelingConfident: false
}

console.log(assessLiz.isFeelingConfident);

// Write a function that adds two numbers and returns the result. Invoke the function.
function addTwoNumbers(numberOne, numberTwo) {
  const total = numberOne + numberTwo;
}

addTwoNumbers(5,3);

// Write a function that takes a person’s name as a parameter and prints the message “Hello ___!”, including that person’s name, to the console. (Example: “Hello Amanda!“)

function sayHelloToSomeone(firstName) {
  console.log(`Hello ${firstName}`);
};

const firstName = "liz"
sayHelloToSomeone(firstName)

// Write a function that takes two parameters, a persons name and a color, and prints the message “___ s favorite color is ____”, including that persons name and the color. Example: Cassandra’s favorite color is yellow.”)
function lizFavoriteColor(firstName, color) {
  console.log(`${firstName}s favorite color is ${color}`)
};

const myName = "liz"
const myFavoriteColor = "blue"
lizFavoriteColor(myName, myFavoriteColor);

// Write a function that takes two parameters, a total price and a tax rate, and calculates the cost of tax.
function totalCostOfTax(totalPrice, taxRate) {
  console.log(totalPrice + taxRate)
} 

const price = 14
const tax = .07
totalCostOfTax(price, tax)

// Write a function that takes a “person” object as a parameter (including 3 properties: firstName, lastName, and age), and outputs the person’s full name.
const whoIAm = {
  firstName: "Liz",
  lastName:"Cerami",
  age: 34
}

console.log(whoIAm.firstName, whoIAm.lastName)
