debugger
/* JavaScript Hoisting refers to the process 
whereby the interpreter appears to move the 
declaration of functions, variables, classes, or 
imports to the top of their scope, prior to 
execution of the code. Hoisting is not a term 
normatively defined in the ECMAScript 
specification.
*/
console.log(name)

var name = 'titas'

// google temporal dead zone (TDZ) in ES6, only for let & const
// read about arrow function & hoisting from hitesh


hi()
// function declearation & definition
function hi(){
    console.log('hi')
}
// sayHi() will throw error


// function expression & definition
const sayHi = function(){
    console.log('Hello')
}

sayHi() // works fine

// read about anon functioms
// revise IIFE 