function filtrarNumeros(array) {
    const numeros = array.filter(item => typeof item === 'number')
    return numeros
}

console.log(filtrarNumeros([1, '12', 2, 'aaaa', 'aaa', 'salsicha']))

