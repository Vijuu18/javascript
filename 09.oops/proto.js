let myhero= ["thor","spiderman"]

let heropower= {
    thor:"hammer",
    spiderman:"sling",

    getspiderpower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }

}
Object.prototype.men= function(){
    console.log(`men are brave`);
    
}
heropower.men()
myhero.men()         // agar proto object ka h to use array,function,string sabhi use kar sakte hai

Array.prototype.heyman= function(){
    console.log(`hey man`);
    
}
myhero.heyman()
//heropower.heyman()      // array ka proto object ke liye use nahi kar skate


// inherritance

const user={
    username:"chai",
    email:"e8ujdd"
}
const teacher={
    makeVideo: true
}
const teachingSupport={
    isAvailable:false
}
const TAsupport={
    makeAssignment:"js",
    fulltime:true,
    __proto__:teachingSupport
}
teacher.__proto__=user 

//Modern Syntax 
Object.setPrototypeOf(teachingSupport,teacher) 

let anotherusername="gomesh   "

String.prototype.truelength= function(){
    console.log(`${this}`);
    console.log(`True length is :${this.trim().length}`);
    
}
anotherusername.truelength() 
"vijjay".truelength()