let obj = {
    fName: "John",
};

// let obj2 = {
//     lName: "Cena",
// };

// obj2.__proto__ = obj;

// console.log(obj2.fName)

obj2 = Object.create(obj)
obj2.lname = "Cena"

console.log(obj2)