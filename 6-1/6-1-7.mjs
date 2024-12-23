// 変数aを定義
const a = 10

// 厳密等価演算子で比較し、結果をコンソールに出力

// Falseとなる数値（例: 右辺が異なる数値）
console.log("a === 5:", a === 5) // False

// Falseとなる文字（型が不一致: 数字としては一致しているが型が文字列）
console.log("a === '10':", a === '10') // False

// Trueとなる数値（例: 右辺が同じ数値で型も一致）
console.log("a === 10:", a === 10) // True