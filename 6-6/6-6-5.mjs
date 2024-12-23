const objectArray6_5_5 = [
    { key: "A", value: "カレー" },
    { key: "B", value: "定食" },
    { key: "C", value: "ラーメン" }
]

const map6_6_5 = new Map()
objectArray6_5_5.forEach(obj => {
    map6_6_5.set(obj.key, obj.value)
})

for (const [key, value] of map6_6_5) {
    console.log(`key: ${key}, value: ${value}`)
}
