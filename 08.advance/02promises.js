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
        
    },1000)
}).then(function(){
    console.log("async resolved");
    
})

const promisethree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:"vijay",
            email:"aa@ju.com"
        })
    },1000)
})

promisethree.then(function(user){
    console.log(user);
    
})

const promisefour= new Promise(function(resolve,reject){
    
    setTimeout(function(){
        let error= false
        if(!error){
            resolve({username:"harsh", password:"123" })
        }
        else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

promisefour.then( (user)=>{
    console.log(user);
    return user.username
}).then((username)=>{             // pehle then ne jo return kiya h wo dusra then receive karega
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=> console.log("The promise is resolved or rejected")
)


const promisefive= new Promise(function(resolve,reject){
    
    setTimeout(function(){
        let error= false
        if(!error){
            resolve({username:"javascript", password:"123" })
        }
        else{
            reject('ERROR: error 404')
        }
    },1000)
})

async function consumepromisefive(){
    try {
        const response= await promisefive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumepromisefive()


// async function getallluser(){
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()                                   
//         console.log(data);                 // await = data process hone me jo time lagta h use hone dena
        
//     } catch (error) {
//         console.log("E: ",error);
        
//     }
// }
// getallluser()

// Another way of fetching the data from api 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
} )
.then((data)=>{
    console.log(data);
    
} )
.catch((error)=>{
    console.log(error);
    
} )