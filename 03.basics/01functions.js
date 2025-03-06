function addtwoNum(num1,num2){
    console.log(num1+num2);
}
addtwoNum(3,"4")

function addNum(num1,num2){
    return num1+num2
}
const x= addNum(2,8)
console.log(x);

function loginUserMsg(username="harsh"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMsg("vijay"));

function calculateCartPrice(val1,...num1){  // three dot is a spread or rest operator,sabko ek me kar dega ya alag alag 
    return num1
}
console.log(calculateCartPrice(100,200,300));

const user={
    username:"vijay",
    price:1999
}

function handleObject(anyobject){
    console.log(`my name is ${anyobject.username} my salary is ${anyobject.price}`);
}

// handleObject(user)
handleObject({    // object bana kar bhi bhej sakte hai
    username:"vinay",
    price:3999
})
 
const myNewArray=[100,200,300,340]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([230,340,340,234]));// we can directly pass a array in the function

