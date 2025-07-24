const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c} }

console.log(JSON.stringify(obj)) // A função é excluida por ser um JSON, porque JSON é um formato de dados,
// ou seja, não pode ser executado.

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))// errado 
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}")) // errado
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // O JSON precisa ter aspas duplas.
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) // atributos tem que ser delimitado por aspas duplas