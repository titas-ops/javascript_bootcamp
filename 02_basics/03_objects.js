// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Titas",
    "full name": "Titas Dey",
    [mySym]: "mykey1", // imp
    age: 18,
    location: "Kolkata",
    email: "titas@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "titas@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "titas@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());