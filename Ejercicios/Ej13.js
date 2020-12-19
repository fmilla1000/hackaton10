/*Escriba una función que convierta un objeto en una matriz de claves y valores.
objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]*/

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