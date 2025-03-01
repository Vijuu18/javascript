const id =Symbol("12")
const newid=Symbol("12")
console.log(id==newid);

const val=100.3 // number datatype me saare hi aagye float bhi
const bignum=728273288223828n  // n lagane ke baad ye bigint me convert ho gaya

//array
const hero=["shaktiman","ironman","captain"]
console.log(hero);

//object
let myobj={
    name:"vijay",
    age:20,
}
// function
const myfun= function(){
    console.log("hello world");
}

console.log(typeof bignum);


// about stack and heap memory

let myname ="vijay";
let othername= myname;
myname="vinay";
console.log(myname);
console.log(othername); // its a stack memory where we use copy of a datatype

let user1={
    email:"vp@.com",
    upi:"vp@ybl",
}
let user2 = user1
user2.email="vinay@p.com"
console.log(user1.email);
console.log(user2.email);


