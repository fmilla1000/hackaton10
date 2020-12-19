/*Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
countdown(5) ➞ [5, 4, 3, 2, 1, 0]*/

function countdown(num) {

    let lista = []
    for (let n = 0; n <= num; n++) {
        lista.push(n)
    }

    return lista.reverse(lista)
}

let x = 5
console.log(countdown(x))