function ReceberSomenteParesDeIndicesPares(array) {
    const resultado = array.filter((elemento, indice) => {
        return indice % 2 === 0 && elemento % 2 === 0
    })
    return resultado
}

console.log(ReceberSomenteParesDeIndicesPares([10, 70, 22, 43, 44, 89, 66, 5]))
// Saída: [10, 22, 44, 66]
