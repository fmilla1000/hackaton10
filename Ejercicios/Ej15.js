function multiplyByLength(numeros) {

    let numerosMultiplicados = []
    for (let n = 0; n < numeros.length; n++) {
        numerosMultiplicados.push(numeros[n] * numeros.length)
    }

    return numerosMultiplicados
}

let x = [2, 3, 1, 0]
console.log(multiplyByLength(x))