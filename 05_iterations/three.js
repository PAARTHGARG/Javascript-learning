// for of

//["","",""]
//[{},{},{}]

const arr = ["superman","Batman",3,4,5]

for (const num of arr) {
    //console.log(num)
}

const greetings = "Hello World!"
for(const char of greetings){
    //console.log(`Each character of greeting is ${char}`);
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")
for (const element of map) {
    // console.log(element); 
}
for (const [element_first,element_second] of map) { // key,value can be used in place of element_first,element_second
    // console.log(`${element_first} :- ${element_second}`); 
}
const my_obj = {
    game1:"NFS",
    game2:"gta"
}
// for (const [key,value] of my_obj) { // it cant be done by for of loop as it is not iteratable
//     console.log(key,value);
// }
