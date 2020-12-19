/*Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)*/
function suma(...rest) {
    let numeros = [...rest]

    let suma = 0
    numeros.forEach(function(numero) {
        suma += numero
    })

    return suma
}

console.log(suma(1, 2, 3))