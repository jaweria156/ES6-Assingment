//Question 1
function demonstrateScoping() {
    // Declaring variables with different scoping rules
    if (true) {
      var varVariable = "I am scoped to the function or global scope";
      let letVariable = "I am scoped to this block";
      const constVariable = "I am also scoped to this block and cannot be reassigned";
  
      // Explanation of the variables' scopes within the block
      console.log(`Question 1a) Inside the block:
        varVariable: ${varVariable},
        letVariable: ${letVariable},
        constVariable: ${constVariable}`);
    }
  
    // Explanation of variables outside the block
    const outsideExplanation = `Outside the block:
      varVariable: ${varVariable} (accessible because it's function/global scoped),
      letVariable: Cannot access (block scoped),
      constVariable: Cannot access (block scoped).`;
  
    return outsideExplanation;
  }
  
  // Testing the function and printing the result
  console.log("Question 1b) " + demonstrateScoping());
  



//Question 2
// Function to create a multiplier
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

// Create functions using the closure
const double = createMultiplier(2);
const triple = createMultiplier(3);

// Test the functions
console.log("Question 2a) " + double(5)); // Output: 10
console.log("Question 2b) " + double(8)); // Output: 16
console.log("Question 2c) " + triple(5)); // Output: 15
console.log("Question 2d) " + triple(8)); // Output: 24




//Question 3
// Function with destructuring and default values
function getUserInfo({ name, age, country = "Unknown", city = "Unknown" }) {
    return `Name: ${name}, Age: ${age}, Country: ${country}, City: ${city}`;
}

// Test cases
console.log("Question 3a) " + getUserInfo({ name: "Hiba", age: 23, country: "Pakistan", city: "Karachi" }));


console.log("Question 3b) " + getUserInfo({ name: "Zoheb", age: 28 }));


console.log("Question 3c) " + getUserInfo({ name: "Sadia", age: 27, city: "Lahore" }));




//Question 4
function calculateTotal(price, ...discounts) {
  // Use the reduce method to subtract each discount from the price
  let finalPrice = discounts.reduce((acc, discount) => acc - discount, price);

  // Ensure the final price isn't negative
  return Math.max(finalPrice, 0);
}


const totalPrice = calculateTotal(100, 10, 5, 20); // Subtracts 10, 5, and 20 from 100
console.log("Question 4) " + totalPrice); // Output: 65




//Question 5
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

// Testing the methods
console.log("Question 5a) " + calculator.add(5, 3)); // Output: 8
console.log("Question 5b) " + calculator.subtract(10, 4)); // Output: 6
console.log("Question 5c) " + calculator.add(15, 20)); // Output: 35
console.log("Question 5d) " + calculator.subtract(25, 50)); // Output: -25




//Question 6
// Array of book objects
const books = [
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", yearPublished: 2018 },
  { title: "You Don’t Know JS", author: "Kyle Simpson", yearPublished: 2015 },
  { title: "JavaScript: The Good Parts", author: "Douglas Crockford", yearPublished: 2008 },
];

// Function to log each book's information
const logBooks = (bookArray) => {
  for (const { title, author, yearPublished } of bookArray) {
    console.log(`Question 6) Title: "${title}", Author: ${author}, Year Published: ${yearPublished}`);
  }
};

// Call the function
logBooks(books);





//Question 7
// Generator function for unique IDs
function* idGenerator() {
  let id = 1; // Start from 1
  while (true) {
    yield id++;
  }
}

// Create an instance of the generator
const generateId = idGenerator();

// Call the generator to get unique IDs
console.log("Question 7a) " + generateId.next().value); // Output: 1
console.log("Question 7b) " + generateId.next().value); // Output: 2
console.log("Question 7c) " + generateId.next().value); // Output: 3
console.log("Question 7d) " + generateId.next().value); // Output: 4

// Additional calls to show IDs are unique
console.log("Question 7e) " + generateId.next().value); // Output: 5






// //Question 8
// // Importing functions from mathOperations.js
// import { add, subtract, multiply, divide } from './mathOperations.js';

// // Performing calculations
// var result1 = add(10, 5);
// console.log(`10 + 5 = ${result1}`); // Output: 10 + 5 = 15

// var result2 = subtract(10, 5);
// console.log(`10 - 5 = ${result2}`); // Output: 10 - 5 = 5

// var result3 = multiply(10, 5);
// console.log(`10 * 5 = ${result3}`); // Output: 10 * 5 = 50

// var result4 = divide(10, 5);
// console.log(`10 / 5 = ${result4}`); // Output: 10 / 5 = 2

// var result5 = divide(10, 0);
// console.log(`10 / 0 = ${result5}`); // Output: 10 / 0 = Cannot divide by zero





//Question 9
// Student object
// const student = {
//   name: "Syeda Javeria",
//   age: 20,
//   grade: "A",
//   subjects: ["Math", "English", "Computer Science"],
// };

// // Using a for..in loop to log each property and its value
// for (const property in student) {
//   console.log(`${property}: ${student[property]}`);
// }

// if (Array.isArray(student[property])) {
//   console.log(`${property}: ${student[property].join(", ")}`);
// } else {
//   console.log(`${property}: ${student[property]}`);
// }





//Question 10
// Original array
let numbers = [1, 2, 3, 4];

// Using map to create a new array with squared values
let squares = numbers.map(num => num ** 2);

// Printing the original and modified arrays
console.log("Question 10a) Original Array:", numbers);
console.log("Question 10b) Squared Array:", squares); 





//Question 11
// Function to perform addition
function add(a, b) {
  return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
  return a - b;
}

// Higher-order function that takes two numbers and a callback
function operate(num1, num2, callback) {
  if (typeof callback !== "function") {
      throw new Error("Callback must be a function");
  }
  return callback(num1, num2);
}

// Using the operate function with addition and subtraction
var result1 = operate(10, 5, add); // 10 + 5 = 15
console.log(`Question 11a) Addition Result: ${result1}`);

var result2 = operate(10, 5, subtract); // 10 - 5 = 5
console.log(`Question 11b) Subtraction Result: ${result2}`);





//Question 12
function printMessage() {
  console.log("Question 12) Hello, World!");
}

// Set a delay of 3 seconds (3000 milliseconds)
setTimeout(printMessage, 3000);



//Question 13
function logCurrentTime() {
  const now = new Date();
  console.log(`"Question 13a) Current Time: ${now.toLocaleTimeString()}`);
}

// Start logging the current time every 2 seconds
const intervalId = setInterval(logCurrentTime, 2000);

// Stop the interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Question 13b) Stopped logging time after 10 seconds.");
}, 10000);





//Question 14
function fetchData() {
  return new Promise((resolve, reject) => {
      // Simulate network request with a delay of 2 seconds
      setTimeout(() => {
          const success = true; // Simulate success or failure
          if (success) {
              resolve("Data received!");
          } else {
              reject("Failed to fetch data.");
          }
      }, 2000);
  });
}

// Calling fetchData and handling the response
fetchData()
  .then((message) => {
      console.log("Question 14a) " + message); // Logs: "Data received!" if resolved
  })
  .catch((error) => {
      console.error("Question 14b) " + error); // Logs: "Failed to fetch data." if rejected
  });






//Question 15
// Using async/await to rewrite fetchData
async function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const success = true; // Simulate success or failure
          if (success) {
              resolve("Data received!");
          } else {
              reject("Failed to fetch data.");
          }
      }, 2000);
  });
}

// Calling fetchData with async/await
async function handleFetchData() {
  try {
      const message = await fetchData();
      console.log("Question 15a) " + message); // Logs: "Data received!" if resolved
  } catch (error) {
      console.error("Question 15b) " + error); // Logs: "Failed to fetch data." if rejected
  }
}

handleFetchData();



//Question 16
function power(base, exponent) {
  return base ** exponent;
}

// Testing the function with different values
console.log("Question 16a) " + power(2, 3)); 
console.log("Question 16b) " + power(5, 2));
console.log("Question 16c) " + power(10, 0));
console.log("Question 16d) " + power(-2, 3));
console.log("Question 16e) " + power(3, -2));





//Question 17
class Animal {
  constructor(name, species) {
      this.name = name;
      this.species = species;
  }

  speak() {
      let sound;
      switch (this.species.toLowerCase()) {
          case "dog":
              sound = "Woof!";
              break;
          case "cat":
              sound = "Meow!";
              break;
          case "cow":
              sound = "Moo!";
              break;
          case "bird":
              sound = "Chirp!";
              break;
          default:
              sound = "makes a sound!";
      }
      console.log(`"Question 17) " + ${this.name} the ${this.species} says ${sound}`);
  }
}

// Creating instances of the Animal class
const dog = new Animal("Buddy", "Dog");
const cat = new Animal("Whiskers", "Cat");
const cow = new Animal("Bessie", "Cow");

// Calling the speak method
dog.speak(); // Buddy the Dog says Woof!
cat.speak(); // Whiskers the Cat says Meow!
cow.speak(); // Bessie the Cow says Moo!





//Question 18
function checkEvenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// Testing the function with various numbers
console.log("Question 18a) " + checkEvenOrOdd(4)); 
console.log("Question 18b) " + checkEvenOrOdd(7)); 
console.log("Question 18c) " + checkEvenOrOdd(0)); 
console.log("Question 18d) " + checkEvenOrOdd(-2)); 
console.log("Question 18e) " + checkEvenOrOdd(-3)); 





//Question 19
const user = {
  name: "Rida Nasir",
  address: {
      city: "Karachi",
  },
};

// Function to safely log the city name
function logCityName(user) {
  const city = user?.address?.city;
  console.log("Question 19) " + city ? `City: ${city}` : "City not available.");
}

// Test cases
logCityName(user); // Output: City: New York
logCityName({}); // Output: City not available.
logCityName({ address: {} }); // Output: City not available.
logCityName(null); // Output: City not available.