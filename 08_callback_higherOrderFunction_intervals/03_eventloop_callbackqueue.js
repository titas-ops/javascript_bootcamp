// --------------------------------
// Event Loop & Callback Queue DEMO
// --------------------------------

console.log("Script start");

// -----------------------------
// Example 1: setTimeout vs Promise
// -----------------------------

setTimeout(() => {
  console.log("setTimeout: This goes to Callback Queue");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise: This goes to Microtask Queue");
});

console.log("Script end");

// Expected Output:
// 1) Script start
// 2) Script end
// 3) Promise... (microtask runs before timeout)
// 4) setTimeout...

// -----------------------------
// Example 2: Heavy computation blocks queue
// -----------------------------

console.log("Blocking loop starts");

for (let i = 0; i < 1e9; i++) {} // Heavy blocking loop

console.log("Blocking loop ends");

// Even if you had setTimeout, it has to wait until Call Stack is clear!

// -----------------------------
// How the Event Loop works:
// -----------------------------
// 1) Executes global synchronous code first.
// 2) Handles Microtasks (Promises, queueMicrotask).
// 3) Then handles Callback Queue (setTimeout, setInterval callbacks).
