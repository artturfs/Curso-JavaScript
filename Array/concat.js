// Concat é um método tanto para strings quanto para arrays

const filhas = [ 'Ualeskah', 'Cibalena' ]
const filhos = [ 'Uoxiton', 'Uesclei' ]
const todos = filhas.concat(filhos) // concat serve para concatenar arrays
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])) // concat serve para concatenar arrays e valores
