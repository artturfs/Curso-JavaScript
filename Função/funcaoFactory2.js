function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

// Criando produtos usando a função factory
const produto1 = criarProduto("Notebook", 2199.49);
const produto2 = criarProduto("iPad", 1199.49);
console.log(produto1); // { nome: 'Notebook', preco: 2199.49, desconto: 0.1 }
console.log(produto2); // { nome: 'iPad', preco: 1199.49, desconto: 0.1 }