/*Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Becky", "John", "Steve"]*/

function getStudentNames(nombres) {

    let nombresSueltos = []
    for (let n = 0; n < nombres.length; n++) {
        nombresSueltos.push(nombres[n].name)
    }
    return nombresSueltos
}

let datos = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" },
]

console.log(getStudentNames(datos))