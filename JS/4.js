function Person(name, age){
    this.name = name;
    this.age = age;
}

// var obj = {
//     greet(){
//         console.log('Hello ${this.name}')
//     }
// }

Person.prototype.greet = funtion()
{
    console.log(`Hello ${this.name}`)
}
    


let user = new Person ("John", 8)
user.greet()
console.log(user)
console.log(Person.prototype)
