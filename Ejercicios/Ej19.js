function repetir(elemento, tiempos) {

    let lista = []
    for (let n = 0; n < tiempos; n++) {
        lista.push(elemento)
    }
    return lista
}

console.log(repetir(13, 5))