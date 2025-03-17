const promiseOne= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    },2000)
}).then(function(){
    console.log("async resolved");
    
})