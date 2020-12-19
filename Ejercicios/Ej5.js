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