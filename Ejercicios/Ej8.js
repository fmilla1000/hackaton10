function findLargestNums([a, b, c]) {
    n1 = Math.max(...a)
    n2 = Math.max(...b)
    n3 = Math.max(...c)
    return [n1, n2, n3]
}

console.log(findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0]
]))