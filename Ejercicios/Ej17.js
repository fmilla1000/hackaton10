function diffMaxMin(a, b) {

    a = Math.min(...num)
    b = Math.max(...num)
    return b - a
}

let num = [10, 4, 1, 4, -10, -50, 32, 21]
console.log(diffMaxMin(num))