//objects literals

const mysym= Symbol("key1")

const jsuser={
    name:"vijay",
    "full name":"vijay patel",
    [mysym]:"mykey1", // symbol ke liye bracket use hota hai
    age:22,
    batch:2023,
    email:"vijay@google.com",
    isloggedin: false,
    lastlogindays:["monday","sunday"]
}

console.log(jsuser.age);
console.log(jsuser["full name"]); // print karane ka tarika hai 
console.log(jsuser["email"]);
console.log(jsuser[mysym]);

jsuser.email="vijay@1122.com"
// Object.freeze(jsuser)   // iske baad koi changes nahi honge
jsuser.email="yadav@harsh.com"
console.log(jsuser);

jsuser.greetings= function(){
    console.log("hello user");

}
jsuser.greting2= function(){
    console.log(`hello user,${this.name}`);
    
}
console.log(jsuser.greetings);
console.log(jsuser.greting2);


