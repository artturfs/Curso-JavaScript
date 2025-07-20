// Callback é uma função que é passada como argumento para outra função
// A função de callback é executada após a conclusão da função que a recebeu como argumento

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // Chama a função imprimir para cada elemento do array
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})
fabricantes.forEach(fabricante => console.log(fabricante))