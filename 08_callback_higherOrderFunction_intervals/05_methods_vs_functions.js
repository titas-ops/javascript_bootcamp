// -----------------------------
// Methods vs Functions in JS
// -----------------------------

// -----------------------------
// Function: Standalone block
// -----------------------------

function greet() {
  console.log("Hello from a FUNCTION");
}

greet();

// -----------------------------
// Method: Function INSIDE an object
// -----------------------------

const user = {
  name: "Sam",
  sayHello: function() {
    console.log(`Hello ${this.name}, from a METHOD`);
  }
};

user.sayHello();

// -----------------------------
// 'this' behavior
// -----------------------------

// Functions don't have 'this' bound unless they’re methods

function showThis() {
  console.log(this);
}

showThis(); // In Node.js, `this` is empty object in module. In browser, `window`.

user.showThis = showThis;
user.showThis(); // Now 'this' refers to `user`

// -----------------------------
// Summary
// -----------------------------
// - Function: standalone, reusable block.
// - Method: function attached to object.
// - Methods can use 'this' to access object’s properties.
