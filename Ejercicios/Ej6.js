function traerMinMax(a, b) {
    a = Math.min(...num)
    b = Math.max(...num)
    return [a, b]
}

let num = [1, 2, 3, 4]
console.log(traerMinMax(num))