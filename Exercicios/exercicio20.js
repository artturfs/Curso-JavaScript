function calcularMedia(array) {
    array.sort()
    return array[0]
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([11243, 112, 121230, -15, 12390, 1239, 148, 3290, 12039]))