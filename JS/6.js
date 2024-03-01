class User{
    constructor(name){
        this.name = name
    }
    sayHi(){
        console.log("Hello " + this.name)
    }
}

let user = new User ("John")
user.sayHi()
let user1 = new User ("John")
user.sayHi()
let user2 = new User ("John")
user.sayHi()

console.log(typeof User)
console.log(User.prototype.sayHi)