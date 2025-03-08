const array=["js","cp","python","ruby"]
array.forEach(function(val){       // callback h isliye function ka naam nahi ayega
     console.log(val);
          
} )

array.forEach((item)=>{        // another way of for each
    console.log(item);
    
} )

// another way
function printme(item){
    console.log(item);
    
}
array.forEach(printme)


array.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
    
} )

const myarray=[
    {
        language:"javascript",
        filename:"js"
    },
    {
        language:"java",
        filename:"java"
    },
    {
        language:"python",
        filename:"py"
    }
]

myarray.forEach( (item)=>{
    console.log(item.language);
    
} )