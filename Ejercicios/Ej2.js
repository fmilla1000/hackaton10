/*Cree una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
*/
function sumaCubos(...rest) {
    let numeros = [...rest]
    let numerosCubo = numeros.map(elevarAlCubo)

    function elevarAlCubo(value) {
        return value ** 3
    }

    let suma = 0
    numerosCubo.forEach(function(numero) {
        suma += numero
    })

    return suma
}

console.log(sumaCubos(1, 2, 3))