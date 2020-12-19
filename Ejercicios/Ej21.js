function findNemo(texto) {
    position = texto.split(' ').indexOf('Nemo') + 1
    return 'I found Nemo at ' + position + '!'
}

let x = "I am finding Nemo !"
console.log(findNemo(x))