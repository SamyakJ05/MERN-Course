class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}

let user = new Person ("John", 8)
user.greet();
console.log(user)