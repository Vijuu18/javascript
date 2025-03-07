for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);      // ctrl + d  for saare duplicate ko select karne ke liye
    
    
}

let myarray = ["flash","superman","batman"]
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element);
    
    
}

// break and continue
for (let i = 0; i <= 20; i++) {
    if(i==5){
        console.log("detected");
        break                        // break se ye loop se bahar aa jayega
        
    }
    console.log(i);
    
}
for (let i = 0; i <= 20; i++) {
    if(i==5){
        console.log("detected");
        continue                        // continue se bas ek baar  loop se bahar aayega
        
    }
    console.log(i);
    
}
