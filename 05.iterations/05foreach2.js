const array=["js","cp","python","ruby"]

const num = array.forEach( (item) => {
    // console.log(item);
    return item
    
} )
// console.log(num); // for each kuch return nahi karta

const myNum=[1,2,3,4,5,6,7,8,9,10]
const values=myNum.filter( (num) =>{      //filter values ko return karta hai 
    return num>5
} )
console.log(values);

const arr1=[]               //for each ke ander bhi operation kar sakte hai
myNum.forEach( (num)=>{
    if(num>5){
        arr1.push(num)
    }

} )
console.log(arr1);


const books=[
    {
        title:'Book1', genre:'fiction', publish:1991, edition:2003
    },
    {
        title:'Book2', genre:'non-fiction', publish:1990, edition:2013
    },
    {
        title:'Book3', genre:'fiction', publish:1981, edition:2009
    },
    {
        title:'Book4', genre:'history', publish:1994, edition:2015
    },
    {
        title:'Book5', genre:'politics', publish:2000, edition:2017
    },
    {
        title:'Book6', genre:'history', publish:2001, edition:2019
    }
];

let userbook = books.filter( (bk) => bk.genre==='history' )
console.log(userbook);

userbook = books.filter( (bk)=> bk.publish>1999 )
console.log(userbook);

// map property , ye bhi value return karta hai
// const sum= myNum.map( (num) => num+10)
// console.log(sum);

// chaining
const newNum= myNum
                    .map( (num)=>  num*10)
                    .map( (num)=> num+1)
                    .filter( (num)=> num>40)
console.log(newNum);
// map me ham operation akrte hai, filter me true ya false check karte hai
                