function charIndex(palabra) {
    a = palabra.indexOf("c");
    b = palabra.lastIndexOf("c");
    return [a, b]
}

let x = "circumlocution"
console.log(charIndex(x))