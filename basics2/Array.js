// Array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["Shaktimaan","Naagraj"]
//  console.log(myArr[1])
 const myArr2= new Array(0,1,2,3,4,5) // Another method of declaring array

// Array Methods

myArr.push(6)
myArr.pop()

myArr.unshift(9)
myArr.shift()
// console.log(myArr.includes(5))
// console.log(myArr.indexOf(3))
// const newArr = myArr.join()
// console.log(myArr) 
// console.log(newArr) 
// console.log(typeof newArr) // Join converts it into string type
 // slice,splice
 console.log("A ",myArr);

 const Arr2 = myArr.slice(1,3)
 console.log(Arr2)
 console.log("B ",myArr)
 const Arr3 = myArr.splice(1,3)
 console.log(Arr3)
 console.log("C ",myArr)
