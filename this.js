const person = {
  name: "John",
  age: 30,
  isMarried: true,
  greet() {
    return `Hello, my name is ${this.name}.`;
    // "this" refrences the object from which it was called
  },
};

console.log(person.greet());
