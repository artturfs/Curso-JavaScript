// "map" transforma cada elemento de um array aplicando uma função e retorna um novo array com os resultados.

const nums = [1, 2, 3, 4, 5]

// é um For com proposito
                              // (elemento, indice, array)
let resultado = nums.map(function(elemento) {
    return elemento * 2
})

console.log(resultado)

const soma10 = elemento => elemento + 10
const triplo = elemento => elemento * 3
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)