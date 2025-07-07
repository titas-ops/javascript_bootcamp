// -----------------------------
// Arrow Functions in JS
// -----------------------------

// 1) Basic Arrow Syntax

const add = (a, b) => {
  return a + b;
};

console.log("Add:", add(2, 3)); // 5

// If single expression, you can omit 'return' & {}
const multiply = (x, y) => x * y;

console.log("Multiply:", multiply(4, 5)); // 20

// -----------------------------
// 2) Arrow with single argument
// -----------------------------

const square = x => x * x;

console.log("Square of 5:", square(5)); // 25

// -----------------------------
// 3) No own 'this'
// -----------------------------

const team = {
  name: "Dev Squad",
  members: ["Alice", "Bob", "Charlie"],
  regularFunction: function() {
    console.log("Regular Function: ", this.name);
  },
  arrowFunction: () => {
    console.log("Arrow Function: ", this.name);
  }
};

team.regularFunction(); // Works: 'this' is team
team.arrowFunction();   // Doesn't work: 'this' is outer (global)

// -----------------------------
// 4) Good uses for Arrow:
// -----------------------------
// - Short callbacks
// - Array methods

const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);
console.log("Doubled:", doubled);

// -----------------------------
// Do NOT use arrow when you need own 'this' or 'arguments'
