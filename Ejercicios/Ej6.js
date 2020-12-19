/*Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]*/


function traerMinMax(a, b) {
    a = Math.min(...num)
    b = Math.max(...num)
    return [a, b]
}

let num = [1, 2, 3, 4]
console.log(traerMinMax(num))