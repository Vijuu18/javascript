class user {
    constructor(username, email, password){
        this.username=username;
        this.email=email;
        this.password=password
    }

    encryptpassword(){
        return`${this.password}abc`
    }
    changeusername(){
        return`${this.username.toUpperCase()}`
    }
}
const chai = new user("chai","mail.com","123")
console.log(chai.encryptpassword());
console.log(chai.changeusername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());