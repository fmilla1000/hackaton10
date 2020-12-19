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