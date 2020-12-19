/*Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js*/
function tipoDato(dato) {
    let tipo = typeof(dato)
    return tipo
}

console.log("El tipo de dato es: ", tipoDato("hola"))
console.log("El tipo de dato es: ", tipoDato(1))
console.log("El tipo de dato es: ", tipoDato([1, 2, 3]))