let num = [10, 20, 30, 40, 50];

// let a = num.filter((val) => {
//     if(val>=10 && val<=25){
//         return val;
//     }
// })
// console.log(a);
// console.log(num);

var sum = num.reduce(function(acc, number){
    return acc+number;
},10)

console.log(sum)