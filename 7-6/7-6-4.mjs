function func1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Test1")
        }, 1000)
    })
}

function func2(input) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("New" + input)
        }, 1000)
    })
}

async function execute() {
    const result1 = await func1()
    console.log(result1)

    const result2 = await func2(result1)
    console.log(result2)
}

execute()
