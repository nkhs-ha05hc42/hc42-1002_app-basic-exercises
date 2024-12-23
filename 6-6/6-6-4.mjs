const map6_6_4 = new Map()

map6_6_4.set("A", "カレー")
map6_6_4.set("B", "定食")

map6_6_4.delete("A")

console.log("Key A の値:", map6_6_4.get("A"))
console.log("Key B の値:", map6_6_4.get("B"))

console.log("Key A の存在:", map6_6_4.has("A"))
console.log("Key B の存在:", map6_6_4.has("B"))