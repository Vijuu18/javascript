var c=30
let a=300
if(true){ // ye block scope hai,iske alawa bahar ka code global scope hai
    let a=20
    const b=30
    console.log("inner",a);
    var c=340 // var hai to block scope me par global scope me bhi access ho raha hai
}
console.log(a);
console.log(c);


function one(){
    const username="vijay"

    function two(){
        const website="youtube"
        console.log(username);  // username ko acces  kar sakte hai par kyuki uska scope jyada hai par,website ko scope se bahra use nahi kar sakte
        
    }
    // console.log(website);
    two()
    
}
one()

if(true){
    const username="harshit"
    if(username==="harshit"){
        const website=" youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

console.log(addone(5)) // yaha par function ko pehle access kar sakte hai
function addone(num){
    return num+1
}

// addtwo(2)    yaha par function varaible me hold hua hai,ise ham baad me hi access kar sakte hai
const addtwo= function(num){
    return num+2
}
addtwo(2)