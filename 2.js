const name = "Ellie Walsch";
// const is connecting data to memory
// Ellie is the string, = connects it to a "folder" called name
// this code adds "Ellie Walsch" to memory
// think of const as "constant"
// Always use const or let, not var; use let if you intend to replace value
const age = "25 years";
console.log(name, age);
// this code prints the data in the terminal
// type node 2.js in terminal

// ToDo: Log a complete string/sentence with the name and age

const greeting = "Hello my name is " + name + " and I am " + age + " old.";
console.log(greeting);
// String concantination - not the best way

const greeting2 = `Hello, my name is ${name} and I am ${age} old.`;
// must use a backtick `
// Template literal - best way
console.log(greeting2);
