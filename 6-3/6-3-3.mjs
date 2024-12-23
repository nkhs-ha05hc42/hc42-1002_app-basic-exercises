const A = [44, -8, 2]
const B = [100, 50, 28]

const A1 = A.some(num => num < 0)
const B1 = B.some(num => num < 0)

console.log(`Aにマイナスの要素が含まれている: ${A1}`)
console.log(`Bにマイナスの要素が含まれている: ${B1}`)
