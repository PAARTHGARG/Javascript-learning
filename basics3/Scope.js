
//var c= 200
let a = 100

if(true){
    let a = 10
    const b = 20
    var c = 30
    //console.log("Inner: ",a)
} 

//console.log(a);
// console.log(b);
//console.log(c); // here c will not be 200 but 30

function one(){
    const username = "Paarth"
    function two() {
        const website="Youtube"
        console.log(username)
    }
    // console.log(website) // shows error as out of scope
    
    //two() // will print "Paarth" but alone this also wont print anything
}
//one()  // Alone will print nothing as  function two is not called 
if (true) {
    const username= "paarth"
    if (username === "paarth") {
        const website = " youtube"
        //console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)
//console.log(addOne(5)) // We can write here as well if function is declared in this way
function addOne(num) {
    return num + 1
}
// console.log(addOne(5))

// console.log(addTwo(5)) // But we cant use it before initialization as function is declared by holding it in a variable
const addTwo = function(num){
    return num+2
}
// console.log(addTwo(5))
 // This is a little glimpse of hoisting