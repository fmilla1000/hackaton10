/*Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]*/
function toArray(datos) {
    lista = Object.entries(datos)
    return lista
}

let x = { a: 1, b: 2 }
console.log(toArray(x))