/*Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"*/

function findNemo(texto) {
    position = texto.split(' ').indexOf('Nemo') + 1
    return 'I found Nemo at ' + position + '!'
}

let x = "I am finding Nemo !"
console.log(findNemo(x))