// Object.preventExtensions: metodo que impede que novas propriedades sejam adicionadas a um objeto, 
// tornando-o não extensível

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto)) // false

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto) // { nome: 'Borracha', preco: 1.99 }

// Object.seal: metodo que impede que novas propriedades sejam adicionadas a um objeto, 
// mas permite que as propriedades existentes sejam modificadas

const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)

console.log('Selado:', Object.isSealed(pessoa)) // true

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa) // { nome: 'Juliana', idade: 29 }

// Object.freeze = selado + valores constantes