//promise

function fun(task){
    return new Promise((resolve, reject) =>{
        if(task){
            resolve(1)
        }
        else{
            reject(2)
        }
    })
}

let onResolve = (res) => {
    console.log(res);
}
let onReject = (err) => {
    console.log(err)
}

fun(true).then(onResolve).catch(onReject);