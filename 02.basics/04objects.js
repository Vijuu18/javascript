// const tinderuser= new Objectt() // singleton object
const tinderuser= {}  // non singleton

tinderuser.id="well123"
tinderuser.name="harshit"
tinderuser.isLoggedIn= true
// console.log(tinderuser);

const regularuser= {   // object ke ander object bhi ho sakta h, nested kai baar
    email:"gosimmon@19.com",
    fullname:{
        userfullname:{
            firstname:"vinay",
            lastname:"patidar"
        }
    }
}

console.log(regularuser.fullname.userfullname.firstname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj3={5:"a", 6:"b"}

// const obj4= {obj1, obj2}
// const obj4= Object.assign({}, obj1, obj2)
const obj4= {...obj1,...obj2,...obj3}
console.log(obj4);


const user=[
    {
        id:21,
        name:"yaami"
    },
    {
        id:32,
        name:"shraddha"
    },
    {
        id:324,
        name:"alia"
    }
]

console.log(user[0].name);
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));



