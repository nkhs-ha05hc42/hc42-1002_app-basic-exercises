const arrayTexts = [
    "Test",
    "Array"
]
arrayTexts[1] = "Newarray"
const A = [
    ...arrayTexts
]
console.log(
    arrayTexts[0],
    arrayTexts[1]
)