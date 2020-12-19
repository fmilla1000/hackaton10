function toArray(datos) {
    lista = Object.entries(datos)
    return lista
}

let x = { a: 1, b: 2 }
console.log(toArray(x))