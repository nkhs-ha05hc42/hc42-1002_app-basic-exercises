function getCurrentTime() {
    const now = new Date()
    return now.toTimeString().split(' ')[0]
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function execute() {
    console.log(`[${getCurrentTime()}] start`)
    console.log(`[${getCurrentTime()}] start`)

    await delay(10000)
    console.log(`[${getCurrentTime()}] ★`)

    await delay(10000)
    console.log(`[${getCurrentTime()}] ◆`)

    console.log(`[${getCurrentTime()}] end`)
}

execute()
