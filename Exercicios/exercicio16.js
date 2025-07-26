function somarNumeros (array) {
    const reduce = array.reduce((acumuladora, indice) => {
        return acumuladora + indice
    }, 0)
    return reduce
}

console.log(somarNumeros([15, 15, 15, 15]))