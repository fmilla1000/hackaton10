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