function potencia(numPot, pot) {
    total = numPot ** pot
    return total
}

let num1 = Number(prompt("Ingrese el numero a potenciar: "))
let num2 = Number(prompt("Ingrese la potencia: "))

console.log("El resultado es: ", potencia(num1, num2))