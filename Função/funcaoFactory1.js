// Função factory é uma função que retorna um objeto
// É uma forma de criar objetos sem usar a palavra-chave "new"

const prod1 = {
    nome: "Celular Ultra Mega",
    preco: 4998.90,
    desconto: 0.40
}

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90,
    desconto: 0.30
}

// Função factory que cria um objeto pessoa

function criarPessoa() {
    return {
        nome: "Artur",
        sobrenome : "Fernandes",
    }
}

console.log(criarPessoa()); // { nome: 'Artur', sobrenome: 'Fernandes' }