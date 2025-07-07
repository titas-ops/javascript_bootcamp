setTimeout('console.log(true)') // o/p>> not from this file & from

// setTimeout('hiiiiiiii')

setTimeout(`console.log('hello,');
    console.log('I am, Titas Dey')`,1000) // checkout all the arguments in setTimeout

    // return value of setTimeout, timer , id of timer

// clearTimeout,clearInterval

const t1 = setTimeout(`console.log('hi-1')`,1000)
const t2 = setTimeout(`console.log('hi-2')`,2000)
const t3 = setTimeout(`console.log('hi-1')`,3000)

clearTimeout(t3) // check o/p in console not in vs code terminal

// clearInterval(t2)

function a(){
    console.log("hello , world!")
}

const t4 = setTimeout(a,6000)  // setTimeout is now a higher order function

// setTimeout is synchronous

// -----------------------------
// setTimeout & setInterval DEMO
// -----------------------------

console.log("Program started");

// -----------------------------
// setTimeout: Runs ONCE after delay
// -----------------------------

// Syntax: setTimeout(callback, delay_in_ms)
setTimeout(() => {
  console.log("setTimeout: This runs after 2000 ms");
}, 2000);

console.log("setTimeout is async - next line runs immediately");

// Example: simulate network request
console.log("Fetching user data...");
setTimeout(() => {
  console.log("User data received!");
}, 3000);
console.log("Can do other work while waiting...");

// -----------------------------
// setInterval: Runs REPEATEDLY at intervals
// -----------------------------

let counter = 0;

const intervalId = setInterval(() => {
  counter++;
  console.log("Interval: Counter is", counter);

  if (counter >= 5) {
    clearInterval(intervalId); // Stop the interval
    console.log("Interval cleared after 5 runs");
  }
}, 1000);

// -----------------------------
// clearTimeout: Cancel a timeout before it runs
// -----------------------------

const timeoutId = setTimeout(() => {
  console.log("You will NOT see this because we clear it!");
}, 4000);

clearTimeout(timeoutId); // Cancels the above timeout

console.log("Timeout cleared before it could run");

// -----------------------------
// Important points:
// -----------------------------
// 1) Both are asynchronous: they don’t block the main thread.
// 2) setTimeout runs once, setInterval repeats until cleared.
// 3) Always store the ID to clear when needed.
