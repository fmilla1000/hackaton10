/*Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]*/
function findLargestNums([a, b, c]) {
    n1 = Math.max(...a)
    n2 = Math.max(...b)
    n3 = Math.max(...c)
    return [n1, n2, n3]
}

console.log(findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0]
]))