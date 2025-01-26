function getCurrentTime() {
    const now = new Date()
    return now.toTimeString().split(' ')[0]
}

function add(a, b) {
    return a + b
}

function executeWithDelay(delay, callback) {
    setTimeout(() => {
        callback()
    }, delay)
}

console.log(`[${getCurrentTime()}] start`)
console.log(`[${getCurrentTime()}] start`)

executeWithDelay(2000, () => {
    const result = add(5, 10)
    console.log(`[${getCurrentTime()}] Result: ${result}`)

    console.log(`[${getCurrentTime()}] end`)
})
