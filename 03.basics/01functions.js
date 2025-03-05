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
