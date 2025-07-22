// pessoa -> 123 -> {...}
const pessoa = {
    nome: "João"
}
pessoa.nome = "Pedro" // Aqui você NÃO está mudando a referência pessoa, apenas o conteúdo dentro do objeto que pessoa aponta.
console.log(pessoa)

/*

// pessoa -> 456 -> {...}
pessoa = {
    nome: "Ana" // Aqui você está tentando mudar a referência da constante pessoa para um novo objeto ({ nome: "Ana" }).
}

*/

Object.freeze(pessoa) // Método que congela o objeto referido, uma vez que o objeto está congelado, 
// você não consegue modificar esse objeto

pessoa.nome = "Maria"
pessoa.end = "Rua ABC"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: "Artur"})
console.log(pessoaConstante.nome)
console.log(pessoaConstante)