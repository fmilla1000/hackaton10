/*Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.*/
function charIndex(palabra) {
    a = palabra.indexOf("c");
    b = palabra.lastIndexOf("c");
    return [a, b]
}

let x = "circumlocution"
console.log(charIndex(x))