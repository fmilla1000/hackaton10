function objectToArray(datos) {
    lista = Object.entries(datos)
    return lista
}

let x = {
    likes: 2,
    dislikes: 3,
    followers: 10
}

console.log(objectToArray(x))