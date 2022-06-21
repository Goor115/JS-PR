function anrm() {
    let word1 = prompt("Первое слово ");
    let word2 = prompt("Второе слово ");

    let a = word1.split("").sort().join("");
    let b = word2.split("").sort().join("");
    console.log(a);
    console.log(b);
    if (a === b) {
        alert(`Результат - слова ${word1} и ${word2} являются анаграммой.`)
    } else {
        alert(`Не являются анаграммой`)
    }

}
anrm()