const userEmail=[]
if(userEmail){              //isme compare karne ki jarurat nahi padti agr value hai to true
    console.log("got email");
    
}else{
    console.log("dont get email");
    
} 

// falsy value= false, 0, -0, Bigint 0n, "", null, undefined, NaN
// truthy values= 'false', "0", " ", [], {}, function(){}

if(userEmail === 0){
    console.log("array is empty");
    
}

const emptyobj ={}
if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
    
}

// Nullish coalescing operator (??): null, undefined
let val1;
// val1 = 5 ?? 10
// val1= null ?? 5
val1 = undefined ??10

console.log(val1); // ye null ya undefined value aane se bacha leta hai



// Terniary operator
// condition ? true : false
const iceCreamPrice= 100
iceCreamPrice>=50 ? console.log("purchase it") : console.log("dont purchase");

