// primitive types represent the most basic data type
// they represent a single piece of data "discrete value"
// They are immutable which means that cannot be changed, they must be reassigned
// everything in JS is an object except primitive types
// Objects are a collection of data "composite type"

// true
// 33
// "hello"

// Arrays are objects and can be changed "mutable"

const nums = [1, 2, 3, 4, 5]; // Mutable
nums.push(3); // [1, 2, 3, 4, 5, 3]

const num = 33;
num = num + 1; // TypeError: Assignment to constant variable.

// Object literal - we create ourselves
const person = {};
person.name = "Ellie";
console.log(person);

// "name" is key "Earth" is value
const planet = {
  name: "Earth",
  age: 4.5,
  isPopulated: true,
};

// Elements in an array are numerically indexed starting at 0
const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

// Object Literals consist of key-value pairs.
// Object literals are indexed by strings
const planet = {
  name: "Earth",
  age: 4.5,
  isPopulated: true,
  moons: ["Moon"],
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 34,
};

console.log(person2.firstName); // John
