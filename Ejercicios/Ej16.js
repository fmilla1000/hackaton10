function countdown(num) {

    let lista = []
    for (let n = 0; n <= num; n++) {
        lista.push(n)
    }

    return lista.reverse(lista)
}

let x = 5
console.log(countdown(x))