const myarray= [1,2,3,4,5,6]
const heroes= ["ironman","captain","thor"]
console.log(myarray[3]);

myarray.push(8)
console.log(myarray);
myarray.pop()
console.log(myarray); 
console.log(myarray.includes(3));
console.log(myarray.indexOf(4));

const newarray= myarray.join() // ye array ka type string me convert kar deta h
console.log(newarray)
console.log(typeof newarray);

// slice = isme actual array par koi farq nahi padta hai
const n1=myarray.slice(1,3)
console.log(n1);
console.log(myarray);
// splice = isme actual array cut ho jata hai
const n2=myarray.splice(1,3)
console.log(myarray);  //(1,5,6)
console.log(n2);       //(2,3,4)









