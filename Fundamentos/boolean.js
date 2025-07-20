let isAtivo = false
console.log(isAtivo)
console.log(typeof isAtivo) // boolean

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // !! converte para booleano
console.log(!isAtivo) // ! inverte o valor booleano
console.log(!true) // true
console.log(!!true) // false

console.log("\nCONDIÇÕES VERDADERAS:") // quebra de linha em JS
console.log(!!' ')
console.log(!!'texto')
console.log(!!-1)
console.log(!!1)
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // atribuição dentro da condição

console.log("\nCONDIÇÕES FALSAS:")
console.log(!!0)
console.log(!!'') // string vazia
console.log(!!null)
console.log(!!NaN) // Not a Number
console.log(!!undefined)
console.log(!!(isAtivo = false)) // atribuição dentro da condição

console.log("\nEXEMPLOS DE CONDIÇÕES:")
console.log('' || null || 0 || 'texto' || 123) // Retorna o primeiro valor verdadeiro
const nome = ''
console.log(nome || 'Desconhecido') // Se nome for falso, retorna 'Desconhecido'