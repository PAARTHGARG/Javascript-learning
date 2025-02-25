//Stack(Primitive) Heap(Non-Primitive)
let myName="Paarth Garg"
let anotherName= myName
anotherName= "Raja Garg"
console.log(myName);
console.log(anotherName); //This is String so primitive data type and it uses Stack memory which copies the values of the original value that's why we get the updated value on any updation.
let userOne={
    email: "user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email= "Paarthgarg@gmail.com"
console.log(userTwo.email)
console.log(userOne.email)
