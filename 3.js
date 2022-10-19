// TODO: Create some fake shopping cart data
// item, price, quantity
// See if you can multiply the price by the quantity
// Use template literals to print out something like, Your total is

const item = "bananas";
const price = 1;
const quantity = 3;
const total = price * quantity;

const message = `You bought ${quantity} ${item} for ${total}`;
console.log(message);

// console.log(typeof item);
// tells you the type of data type (boolean, number, string, etc)

// const age = 18;

// if (age < 21) {
//   console.log("no drinks for you");
// } else {
//   console.log("PARTY!");
// }

// TODO: if the total is over $20, log they get a 10% discount
if (total > 20) {
  console.log("10% discount");
} else {
  console.log("no discount");
}
