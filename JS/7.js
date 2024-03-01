// console.log("This")
// setTimeout(()=>{
//     console.log("Async")
// },1000)

// console.log("Is")

// setTimeout(fun, 5000)
// console.log("This")

// function fun(){
//     console.log("Async")
// }

// console.log()

// function fun(val){
//     console.log(val)
// }

// function add(a, b, callback){
//     let sum = a + b
//     callback(sum)
// }

// add(5, 10, fun)

function loadingData(callback){
    setTimeout(() => {
        console.log(1)
        callback();
    }, 1000)
    
}
function collectingData(){
    console.log(2)
}
function approvingData(){
    console.log(3)
}
function approved(){
    console.log(4)
}



loadingData(function(){
    collectingData();
    approvingData();
    approved();
});

