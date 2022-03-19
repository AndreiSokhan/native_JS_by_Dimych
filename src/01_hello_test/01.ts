
export function sum(a: number, b: number) {
    return a + b;
}
export function mult(a: number, b: number) {
    return a * b;
}


//задача вернуть массив слов из предложения без "!" и все с маленькой буквы
// return ["hello", "my", "friends"]

export function splitIntoWords(sentence: string) {
    const words = sentence.toLowerCase().split(" ")

    return words.filter(w => w !== "" && w !=="-")
        .map(w => w
            .replace("!", "")
            .replace(".", "")
            .replace(",",""));
}
