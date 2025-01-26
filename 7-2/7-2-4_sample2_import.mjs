import { multiply } from './multiply.mjs'
import { divide } from './divide.mjs'

const multiplyResult = multiply(6, 7)
console.log(`Multiplication result: ${multiplyResult}`)

const divideResult = divide(20, 5)
console.log(`Division result: ${divideResult}`)

const divideByZero = divide(20, 0)
console.log(`Division by zero result: ${divideByZero}`)
