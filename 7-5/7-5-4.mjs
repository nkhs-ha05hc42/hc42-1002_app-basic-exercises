function func1() {
    return new Promise((resolve) => {
        resolve("Test1")
    })
}

function func2(input) {
    return new Promise((resolve) => {
        resolve(`New${input}`)
    })
}

func1()
    .then((result1) => {
        console.log(`func1 result: ${result1}`)
        return func2(result1)
    })
    .then((result2) => {
        console.log(`func2 result: ${result2}`)
    })
