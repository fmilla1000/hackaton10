function squaresSum(x) {
    let suma = 0
    for (let n = 0; n < x + 1; n++) {
        suma += n ** 2
    }
    return suma
}
let x = 3
console.log(squaresSum(x))