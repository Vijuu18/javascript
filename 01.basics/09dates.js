let mydate= new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());

// let mycreatedate=new Date(2025, 0, 23);
// let mycreatedate1=new Date(2025, 0, 23, 4, 54);
let mycreatedate2 = new Date("2025-03-02")
console.log(mycreatedate2);
console.log(mycreatedate2.toDateString());
console.log(mycreatedate2.toLocaleString());

let mytime= Date.now()
console.log(mytime);
console.log(mycreatedate2.getTime());
console.log(Math.floor(Date.now()/1000));

let newdate= new Date()
console.log(newdate.getDate());
console.log(newdate.getDay());
console.log(newdate.getFullYear());

newdate.toLocaleString('default',{
    weekday:"long",
})












