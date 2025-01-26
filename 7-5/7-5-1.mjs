function getCurrentTime() {
    const now = new Date()
    return now.toTimeString().split(' ')[0]
}

function delayedOutput(delay, symbol) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[${getCurrentTime()}] ${symbol}`)
            resolve()
        }, delay)
    })
}

console.log(`[${getCurrentTime()}] start`)
console.log(`[${getCurrentTime()}] start`)

delayedOutput(10000, "★")
    .then(() => delayedOutput(10000, "◆"))
    .then(() => {
        console.log(`[${getCurrentTime()}] end`)
    })
