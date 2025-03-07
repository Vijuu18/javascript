// for of
const array=[1,2,3,4,5]
for (const val of array) {
    console.log(val);
    
}
const greetings="Hello World"
for (const greet of greetings) {
    if(greet==' ') continue
    console.log(greet);
    
}

// Map
const map = new Map()
map.set('IN',"india")
map.set('US',"united states")
map.set('fr',"france")

// console.log(map);

for (const [key,value] of map) {
    console.log(key,"->",value);
    
}

const myobject={
    js:"javascript",
    cpp:"c++",
    py:"python"
}

// for (const [key,value] of myobject) {
//     console.log(key,value);
    
// }                                 // for of loop se object me iterate nahi kar sakte

for (const key in myobject) {
    console.log(`${key} is shortcut for ${myobject[key]}`);
    
} // for in se object me iterate kar skate hai aur array me bhi

for (const key in array) {
    console.log(key);
}
for (const key in array) {
    console.log(array[key]);
    
}// for in ka use map ke liye nahi kar sakte