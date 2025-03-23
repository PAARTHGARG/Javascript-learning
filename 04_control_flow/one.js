// // if
// const isUserLoggedIn= true
// const temperature = 41
// if(temperature>40){
//     console.log("greater than 40");
// }else{
//     console.log("Less than 40")
// }
// console.log("Always execute");
// // <,>,<=,>=,!=,===,!==

// const score =200
// if(score>100){
//     let power="fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

const balance=1000
if(balance>500) console.log("test"), console.log("test2"); // not a good practice
//else if
if(balance<500){
    console.log("less than 500");
}else if (balance<750) {
    console.log("less than 750");
} else if(balance<900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}
// Checking multiple conditions
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
    
}


