function func1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Test1")
        }, 1000)
    })
}

function func2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Test2")
        }, 1000)
    })
}

async function func3() {
    const result1 = await func1()
    const result2 = await func2()

    return result1 + result2
}

async function execute() {
    const result = await func3()
    console.log(result)
}

execute()
