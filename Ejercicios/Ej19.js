/*Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
repeat(13, 5) ➞ [13, 13, 13, 13, 13]*/

function repetir(elemento, tiempos) {

    let lista = []
    for (let n = 0; n < tiempos; n++) {
        lista.push(elemento)
    }
    return lista
}

console.log(repetir(13, 5))