const userEmail = []
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}
// falsy values :- false,0,-0,BigInt 0n,"",null,undefined,Nan

// truthy values:- "0",'false'," ",[],{},function(){}

if(userEmail.length===0){
    console.log("Array is empty");
}
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator(??):- null and undefined

let val1;
val1 = 5??10
val2 = null??10
val3 = undefined ?? 10
val4 = undefined ?? 10??15
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniary Operator

// condition? true:false
const isPrice= 70
isPrice>=80 ? console.log("Greater than 80") : console.log("less than 80");


