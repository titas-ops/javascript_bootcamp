const username = 'dey_titas_ig'
const age = 20
// inshort variables with var go to window
// variables with let/const go to script under global
function add(){
    const x = 5
    const y = 10
    console.log(`x+y = ${x+y}`)
}
function subtract(){
    const x = 5
    const y = 10
    console.log(`x-y = ${x-y}`)
}
add()
subtract()
// console.log(x+y) : error 
console.log("program end")

{
    var you = 'viewer'
    let me  = 'Titas'
    const score = 99
}
// read about ==> window scope vs script scope
you = 'actor'
// console.table(you,me,score)
console.log(you)

