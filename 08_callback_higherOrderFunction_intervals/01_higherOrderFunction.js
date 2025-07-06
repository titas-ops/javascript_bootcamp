function a(b){  // a is higher order fn, sayBye is callback fn
    console.dir(b)
    b()
}

// a('hemlo')
// a({name:'student',roll:829})
// a([1,2,3,4,5,6,7,8,9,10])

// console.dir(a) o/p>>object
// console.dir(1920)
// console.dir("j20j3nwjnenqnbfrhjbfr")
// function is behind the scene an 

a.age = 20 // surprise surprise

console.log(a.age)


function sayBye(){
    console.log('byeeeeeeeeeeeeeeeeeeeeeeee')
}


a(sayBye)

// not a(sayBye())

/*  solution by gpt
Alright — let’s break down what’s happening and where the issue is in your code step by step:

📌 Your code
javascript

function a(b) {
  console.dir(b)
  b()
}

a.age = 20 // surprise surprise
console.log(a.age)

function sayBye() {
  console.log('byeeeeeeeeeeeeeeeeeeeeeeee')
}

a(sayBye())
✅ What works:
You define a function a that takes b as an argument.

Inside a, you console.dir(b) and then b().

You attach a property .age to a → this is legal in JS because functions are first-class objects → so console.log(a.age) will output 20. ✔️

❌ What’s the problem?
The problem is this line:

javascript
Copy
Edit
a(sayBye())
You wrote a(sayBye()) instead of a(sayBye).
This means:

sayBye() is called immediately → it runs → prints "byeeeeeeeeeeeeeeeeeeeeeeee".

Its return value is undefined (because sayBye doesn’t return anything).

So a(undefined) is called.

Inside a, you try b() → but b is undefined. So undefined() throws a TypeError.

✅ What you should write:
javascript
Copy
Edit
a(sayBye)
Here, sayBye is passed as a reference to a.
Inside a:

console.dir(b) prints the function.

Then b() actually runs sayBye.

So you’d see:

plaintext
Copy
Edit
ƒ sayBye() { ... }
byeeeeeeeeeeeeeeeeeeeeeeee
No error.

⚡ Bottom line
❌	✅
a(sayBye()) → runs sayBye immediately & passes its result (undefined)	a(sayBye) → passes the function itself

Functions in JS are values.
When you write sayBye() → it calls it now.
When you write sayBye → it passes the function for someone else to run later.

✅ Key takeaway:
In callbacks, pass the function — don’t call it immediately (unless you really mean to).

Let me know if you want a quick explanation of why functions can have properties like .age — that’s a fun quirk too!

*/


// annonymous function

a(function(){
    console.log('literally define inside a variable name')
})// instantly gets called


// what is callback function?
