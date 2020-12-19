/*Crear una función que reciba un array de valores y filtre los valores que no son string*/

function excluirString(...rest) {
    let datos = [...rest]

    let numeros = datos.filter(soloNumber)

    function soloNumber(value) {
        if (typeof value !== "number") {
            return false
        }
        return value
    }

    return numeros
}

console.log(excluirString(1, 2, 3, "Hola"))