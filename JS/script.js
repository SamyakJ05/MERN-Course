function Person(name, age){
    let person = Object.create(obj)
    person.name = name;
    person.age = age;
    return person
}

var obj = {
    greet(){
        console.log('Hello $(this.name)')
    }
}
let user = Person ("John", 8)
user.greet()
console.log(user)