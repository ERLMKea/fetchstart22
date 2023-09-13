
function kaldMig(func) {
    console.log(func)
    console.log(typeof func)
}

function sov(ms) {
    console.log("skaber nyt promise")
    const prom = new Promise(dummyFunction => setTimeout(() => kaldMig(dummyFunction), ms))
    return prom
}


console.log("start")
async function doSomethingAsync() {
    console.log("1111111 ")
    await sov(10000)
    console.log("111111 færdig med at sove")
}

sov(2000).then( () => {
    console.log("vi har sovet 2000")
})

console.log("start1")
doSomethingAsync()
console.log("slut1")


