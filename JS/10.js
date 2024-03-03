// try catch and throw

function d(a,b){
    try{
        if(b == 0)
            throw new Error("0 No")
        else    return a/b
    }
    catch(err){
        console.log(err.message)
    }

}

console.log(d(10,0))