
/*
function pld() {
    let str = prompt(`Ведіть слово`);
    let strRev = "";
    for (i = str.length - 1; i >= 0; i--) {
        strRev += str[i];
    }
    if (str === strRev) {
        alert(`Паліндром`)
    } else {
        alert(`Не є Паліндром`)
    }
}
pld();

 */
function pld() {
    let word = prompt("Паліндромом");
    let drow = word.split("").reverse().join("");
    if (drow === word) {
        alert("це є паліндромом")
    } else (
        alert("це не паліндромом")
    )
}
pld();
