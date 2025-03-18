const user={
    username:"maharaj",
    loginCount:3,
    signedIn: true,

    getuserdetails: function(){
        console.log(`username :${this.username}`);
        
    }

}
console.log(user.getuserdetails());

function User(username,logincount,isloggedin){
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin;

    return this

}
const userone= new User("umesh",3,true)
const usertwo= new User("garvesh",9,false) // agar new ka use nahi karo to values overwright hoti rahegi

console.log(userone.constructor);
console.log(usertwo);

