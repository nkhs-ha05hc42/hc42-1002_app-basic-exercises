function getCurrentTime() {
    const now = new Date()
    return now.toTimeString().split(' ')[0]
}

function executeWithDelay(delay, symbol, callback) {
    setTimeout(() => {
        console.log(`[${getCurrentTime()}] ${symbol}`);
        if (callback) callback()
    }, delay)
}

console.log(`[${getCurrentTime()}] start`)
console.log(`[${getCurrentTime()}] end`)

executeWithDelay(10000, "★", () => {
    executeWithDelay(20000, "◆")
})
