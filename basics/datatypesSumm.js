// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.3
const isLoggedIn = false
const outsideTemp= null
let userMail;

const id=Symbol('123')
const anotherId=Symbol('123')
//console.log(id==anotherId)
const bigNumber= 33269276528263876543456n

//console.log(typeof(bigNumber)) //bigint
//console.log(typeof(undefined))


// Reference (Non primitive)
//Array,Functions,Objects
const heros=["shaktiman",87,"doga"]
//console.log(typeof(heros));
let myObj={
    name:"paarth",
    age:22
}
//console.log(myObj);
//console.log(typeof(myObj));
const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof(myFunction)) //function