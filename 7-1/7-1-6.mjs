function doubleUntilOver100(value) {
    console.log(value)
    if (value < 100) {
        doubleUntilOver100(value * 2)
    }
}

doubleUntilOver100(10)
doubleUntilOver100(25)
