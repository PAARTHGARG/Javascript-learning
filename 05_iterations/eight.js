const myNums=[1,2,3]
const num=myNums.reduce(function (acc,currval) {
    console.log(`acc:${acc} and currval:${currval}`)
    return acc+currval
},0)
// by arrow function
const total=myNums.reduce((acc,currval)=> acc+currval,0)
console.log(total)

const shoppingCart=[
    {
        itemName:"js course",
        price: 999
    },
    {
        itemName:"py course",
        price: 1999
    },
    {
        itemName:"java course",
        price: 2999
    },
    {
        itemName:"cpp course",
        price: 3999
    },
]
const pricePay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(pricePay);
