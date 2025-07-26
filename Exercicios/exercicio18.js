function calcularMedia(array) {
    const media = array.reduce((total, valor) => (total + valor), 0) 
    return media / array.length
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))