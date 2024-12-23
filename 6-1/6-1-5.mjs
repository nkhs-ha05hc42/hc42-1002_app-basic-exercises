// 変数を定義
const a = 10
const b = null
const c = undefined
const d = 15

// Null合体演算子を用いて設定し、それぞれコンソールに出力
console.log("a ?? d:", a ?? d) // aがnullまたはundefinedでない場合、そのままaを返す
console.log("b ?? d:", b ?? d) // bがnullまたはundefinedならdを返す
console.log("c ?? d:", c ?? d) // cがnullまたはundefinedならdを返す
