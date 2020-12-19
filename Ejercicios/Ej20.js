function vreplace(texto) {
    cambio = texto.replace(/[aeiou]/g, 'u')
    return cambio
}

let x = "apples and bananas"
console.log(vreplace(x))