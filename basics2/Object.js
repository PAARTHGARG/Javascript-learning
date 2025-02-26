// Singleton
//Object.create

//Object literals

const mySym = Symbol("key")
const JsUser ={
    name: "Paarth",
    "full name":"Paarth Garg",
    age:18,
    [mySym]:"key",
    location:"GarhAdda",
    email:"paarth@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// // console.log(JsUser.full name) //cant use dot as it is string here
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof(JsUser[mySym])) // Here String
// console.log(JsUser)
// console.log(typeof mySym) // Here Symbol

// JsUser.email= "Raja@google.com"
// Object.freeze(JsUser)
// JsUser.email= "RajaGarg@google.com"
// console.log(JsUser["email"]);

JsUser.greeting = function(){
    console.log("Hello Paarth")   
}
JsUser.greeting2 = function(){
    console.log(`Hello User ${this.name}`)   
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())
