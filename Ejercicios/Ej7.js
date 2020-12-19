function numTelefono(numeros) {

    num = numeros.join('')
    a = num.slice(0, 3)
    b = num.slice(3, 6)
    c = num.slice(6, 9)
    return "(" + a + ") " + b + "-" + c
}

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(numTelefono(x))