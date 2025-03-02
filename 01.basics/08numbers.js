const score=400
console.log(score);

const balance= new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));// ye point ke baad wali digit kitni rakhni h uake liye h

const othernum=23.879
console.log(othernum.toPrecision(3));

const hundreds= 1000000000
console.log(hundreds.toLocaleString('en-IN'));// coma lagaa dega bus en-IN ka mtlb inadian style me

// Maths

console.log(Math);
console.log(Math.abs(-7));
console.log(Math.round(3.7));
console.log(Math.ceil(3.2));
console.log(Math.floor(3.9));
console.log(Math.max(2,3,45,5));
console.log(Math.min(2,3,2,3,1));

console.log(Math.random());
console.log((Math.random()*10) +1);
 
const min =10
const max=20

console.log(Math.floor(Math.random()*(max-min+1) + min));















