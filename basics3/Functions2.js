// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(2))
// function calculateCartPrice(...num1){
//     return num1
// }
//console.log(calculateCartPrice(200,400,500))
// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,700,800))


// const user={
//     username:"Paarth",
//     price: 999
// }
// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
// }
// handleObject(user)
// handleObject({        //Another way of doing is directly creating object inside function
//     username:"Paarth Garg",
//     price: 9999
// })

const myArray = [200,400,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray))
console.log(returnSecondValue([200,400,600])) // Another way of doing