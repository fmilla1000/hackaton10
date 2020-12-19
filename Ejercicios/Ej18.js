function filterList(lista) {

    let numeros = lista.filter(soloNumber)

    function soloNumber(value) {
        if (typeof value !== "number") {
            return false
        }
        return value
    }
    return numeros
}

let x = [1, 2, 3, "x", "y", 10]
console.log(filterList(x))