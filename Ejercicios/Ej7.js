/*Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"*/

function numTelefono(numeros) {

    num = numeros.join('')
    a = num.slice(0, 3)
    b = num.slice(3, 6)
    c = num.slice(6, 9)
    return "(" + a + ") " + b + "-" + c
}

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(numTelefono(x))