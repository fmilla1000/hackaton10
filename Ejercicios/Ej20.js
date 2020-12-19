/*Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
"apples and bananas".vreplace("u") ➞ "upplus und bununus"*/

function vreplace(texto) {
    cambio = texto.replace(/[aeiou]/g, 'u')
    return cambio
}

let x = "apples and bananas"
console.log(vreplace(x))