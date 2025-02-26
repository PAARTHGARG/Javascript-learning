//const tinderUser= {}
const tinderUser = new Object()

tinderUser.id ="123abc"
tinderUser.name ="Paarth"
tinderUser.isLoggedIn =false

//console.log(tinderUser);

const regularUser = {
    email: "me@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Paarth",
            lastname:"Garg"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)
 
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj4 ={5:"a",6:"b"}
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id:1,
        email:"pg@gmail.com"
    },
    {
        id:2,
        email:"pg2@gmail.com"
    },
    {
        id:3,
        email:"pg3@gmail.com"
    }
]
// console.log(users[1].email)
// console.log(users[1])
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

