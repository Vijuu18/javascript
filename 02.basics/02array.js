const marvel=["ironman","captain","thor"]
const dc=["batman","superman","flash"]

marvel.push(dc);  //push karne par pura array as a element chala jata hai
console.log(marvel);
console.log(marvel[3][1]);

const newarray= marvel.concat(dc) // yaha par ek ek element ander jata hai
console.log(newarray);

const allheroes = [...dc,...marvel]
console.log(allheroes);   // ye spread hai, ye har ek element ko alag alag kar deta hai,no limitation

const another_array =[1,2,3,[4,5,6],3,[5,6,[9,8]]];
console.log(another_array.flat(Infinity)); // ye breakdown kar deta hai

console.log(Array.isArray("vijay"));
console.log(Array.from("vijay"));
console.log(Array.from({name:"vijay"}));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));





