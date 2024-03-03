function loadingData(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1) Loading")
            resolve();
        }, 2000)
    })
    
}
function collectingData(){
    console.log("2) Loading")
}
function approvingData(){
    console.log("3) Approving")
}
function approved(){
    console.log("4) Approved")
}

// loadingData().then(collectingData())
// approvingData()
// approved()

async function run(){
    await loadingData();
    await collectingData();
    await approvingData();
    await approved();
}

run();