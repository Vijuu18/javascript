// immediately invoked function expression (IIFE)
( function chai(){
    // named IIFE
    console.log(`DB-CONNECTED`);
    
})();  // semicolon isliye taki evoked function ruk jaye

( (name)=> {
    console.log(`DB-CONNECTED-TWO ${name}`);
    
})("BINNO")
// paranthesis lagane se function evoked ho jata hai 
// global pollution se bachne ke liye funcs ko evoked karte hai