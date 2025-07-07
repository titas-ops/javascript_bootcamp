// -----------------------------
// Closures & Returning Functions
// -----------------------------

// A closure = function bundled with its lexical scope

function outer(outerVar) {
  console.log("outer() called with:", outerVar);

  // inner() has access to outerVar
  function inner(innerVar) {
    console.log("inner() sees outerVar:", outerVar);
    console.log("inner() sees innerVar:", innerVar);
  }

  return inner; // Return the inner function
}

const fn = outer("outside value");

fn("inside value"); // inner() still remembers outerVar

// -----------------------------
// Real use case: Private state
// -----------------------------

function createCounter() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      console.log("Count after increment:", count);
    },
    decrement() {
      count--;
      console.log("Count after decrement:", count);
    },
    getCount() {
      return count;
    }
  };
}

const myCounter = createCounter();
myCounter.increment(); // 1
myCounter.increment(); // 2
console.log("Current count:", myCounter.getCount()); // 2
myCounter.decrement(); // 1

// -----------------------------
// Why closures matter:
// -----------------------------
// - Encapsulate state (like private vars)
// - Used in callbacks & event handlers
// - Avoid global vars
