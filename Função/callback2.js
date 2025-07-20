const notas = [7.7, 6.5, 5.2, 8.9, 7.1, 9.0]

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Usando o método filter para obter notas baixas

notasBaixas = notas.filter(function(nota) { // Filtra as notas que são menores que 7
    return nota < 7
})

console.log(notasBaixas)

// Usando arrow function para simplificar o código
notasBaixas = notas.filter(nota => nota < 7) // Filtra as notas que são menores que 7
console.log(notasBaixas)