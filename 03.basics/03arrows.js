const user={
    username:"vijay",
    price:1999,
    welcomeMsg:function(){
        console.log(`${this.username} welcome to the website`);
        // console.log(this); // ye hame current context batata hai
        
    }
}
user.welcomeMsg()  
user.username="harsh"
user.welcomeMsg()

// console.log(this); // ye current context globally dekhega


function chai(){
    let username="vijay"
    console.log(this.username);
    // console.log(this);
    
}
chai()// function ke ander this ko aise access nahi kar sakte

const chai1 = () =>{
    let username="vinay"
    console.log(this);
    
}
chai1()   // ye arrow function hai,ise lagakar this ko access kar sakte hai

// const addnum=(num1,num2) => {
//     return num1+num2             // curly brackets ke saath return likhna jarurri hai
// }
// console.log(addnum(3,4));

const addnum = (num1,num2) =>( num1+num2 )   // yaha return likhne ki jarurat nahi

// const addtwo= (num1 ,num2) => ({username:"vijju"})  // object ke liye paranthesis ka prayoghua hai
console.log(addnum(3,1));

