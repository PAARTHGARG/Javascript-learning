const user ={
    username: "Paarth",
    price: 999,
    welcomeMessage: function(){
        //console.log(`${this.username}, welcome to website`)
        //console.log(this)
    }
}
// user.welcomeMessage()
// user.username="Raja"
// user.welcomeMessage()
//console.log(this) // {}

// function chai(){
//     let username= "Paarth"
//     console.log(this.usename) // Undefined
// }
// const chai= function(){
//          let username= "Paarth"
//          console.log(this.usename)   // Undefined
//      }

 const chai= ()=>{
    let username= "Paarth"
    console.log(this.usename)  // Undefined   
    console.log(this)   // {}
}
// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// const addTwo = (num1,num2) =>  num1+num2
// const addTwo = (num1,num2) =>  (num1+num2)
const addTwo = (num1,num2) =>  ({name: "PAARTH"}) // For returning object
console.log(addTwo(3,4))

myArray =[2,3,4,5]
myArray.forEach(()=>{}) // we can write arrow functions in loops as well