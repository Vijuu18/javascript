function multiplyby5(num){
    return num*5
}
multiplyby5.power=2

console.log(multiplyby5(4));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createuser(username,score){
    this.username=username
    this.score=score
}

createuser.prototype.increment= function(){
    this.score=score
}
createuser.prototype.printme= function(){
    console.log(`price is ${this.score}`);
    
}
const chai= new createuser("chai", 20)
const tea= new createuser("tea",50)

chai.printme()


