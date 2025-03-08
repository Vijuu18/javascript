const myNums=[1,2,3]

// const totalSum=myNums.reduce( function(acc,currval) {
//     console.log(`acc:${acc} and currval:${currval}`);
    
//     return acc+ currval
// }, 0) // ye accumulator ko intialize karne ke liye 0 likha hai

const totalSum=myNums.reduce( (acc,curr) => acc+curr,0 )
console.log(totalSum);


const shoppingCart=[
    {
        courseName:"javascript",
        price:2999
    },
    {
        courseName:"java",
        price:3999
    },
    {
        courseName:"c++",
        price:3999
    },
    {
        courseName:"python",
        price:2499
    },
]

const myBill = shoppingCart.reduce( (acc,item)=> acc + item.price,0 ) 
console.log(myBill);
