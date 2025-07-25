const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // pop() serve para remover o último elemento de uma lista ou array
console.log(pilotos)

pilotos.push('Verstappen') // push() serve para adicionar um elemento no final de uma lista ou array
console.log(pilotos)

pilotos.shift() // shift() serve para remover o primeiro elemento de uma lista ou array
console.log(pilotos)

pilotos.unshift('Hamilton') // unshift() serve para adicionar um elemento no início de uma lista ou array
console.log(pilotos)

// splice pode adicionar e remover elementos

// Adicionar  (indice, quantos vai remover, ...quantos vai adicionar)
pilotos.splice(2, 0, 'Bottas', 'Massa') 
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // slice() serve para pegar um pedaço de uma lista ou array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // (indice, ate onde vai pegar(nao vai pegar o ultimo))
console.log(algunsPilotos2)