/*Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO"*/
function capLast(texto) {

    let posPrimeraParte = texto.length - 1
    let primeraParte = texto.slice(0, posPrimeraParte)

    let lastCharOf = texto.slice(-1)
    let capitalLetter = lastCharOf.toUpperCase()

    x = primeraParte + capitalLetter
    return x
}

let x = "hello"
console.log(capLast(x))