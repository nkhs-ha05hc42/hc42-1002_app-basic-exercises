const A = [55, 77, 99]
const B = [33, 55, 80]

const A1 = A.every(num => num > 50)
const B1 = B.every(num => num > 50)

console.log(`Aの全要素が50を超えている: ${A1}`); // true
console.log(`Bの全要素が50を超えている: ${B1}`); // false
