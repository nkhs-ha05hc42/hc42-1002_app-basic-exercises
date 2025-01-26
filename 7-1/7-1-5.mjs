function createObject(japanese, english) {
    return {
        ja: japanese,
        en: english
    }
}

const result = createObject("こんにちは", "hello")

console.log(result)
