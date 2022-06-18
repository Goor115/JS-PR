function anrm() {
    let word1 = prompt("Первое слово ");
    let word2 = prompt("Второе слово ");

    let a = word2.split("").filter(word3 => word1.includes(word3)).join("");
    if (a === word2) {
        alert(`Результат - слова ${word1} и ${word2} являются анаграммой.`)
    } else {
        alert(`Не являются анаграммой`)
    }

}
anrm()