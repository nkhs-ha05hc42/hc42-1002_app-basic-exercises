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

executeWithDelay(2000, "★", () => {
    executeWithDelay(1000, "◆", () => {
        executeWithDelay(2000, "end")
    })
})
