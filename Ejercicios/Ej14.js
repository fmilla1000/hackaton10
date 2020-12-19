/*Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
*/
function squaresSum(x) {
    let suma = 0
    for (let n = 0; n <= x + 1; n++) {
        suma += n ** 2
    }
    return suma
}
let x = 3
console.log(squaresSum(x))