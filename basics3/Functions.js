function sayMyName(){
    console.log("P");
    console.log("a");
    console.log("a");
    console.log("r");
    console.log("t");
    console.log("h");
    
}
// sayMyName()

function addTwoNumbers(number1,number2){
    console.log(number1+number2)
}
// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)
// addTwoNumbers(3,undefined)

//console.log(result) // undefined

function addTwoNumbers(number1,number2){
    //let result= (number1+number2)
    //return result
    return number1+number2
}
result = addTwoNumbers(3,4)
//console.log(result) // 7

function loginUserMessage(username){ // we can also give initial values to username as username="Raja"
    if(username===undefined){       // (!username) just means the same
        console.log("Please enter the username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Paarth"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())
console.log(loginUserMessage(null))
console.log(loginUserMessage(undefined))