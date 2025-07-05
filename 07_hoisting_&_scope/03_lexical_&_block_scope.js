function parent(){
    const name = 'debjyoti'
    function child(){
        const name2 = 'champa'
        console.log(name)
        console.log(name2)
        parent()
    }
    console.log(name2)
}

child()
parent()


// debug the errors
// Lexical scope in JavaScript refers to the ability of inner functions to access 
// variables and functions defined in their outer, or parent, scopes. This scope 
// is determined by the physical location of the code during its definition, not 
// during its execution. It is also known as static scope. 



// read about module scope & implementation