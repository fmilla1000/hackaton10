/* Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33” */
const fn = (nombre, apellido, edad) => "Hola mi nombre es " + nombre + " " + apellido + " y mi edad " + edad

let dato1 = prompt("Ingrese su nombre: ")
let dato2 = prompt("Ingrese su apellido: ")
let dato3 = prompt("Ingrese su edad: ")

console.log(fn(dato1, dato2, dato3))