// Coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = "Cadeira"
produto['Marca do produto'] = "Genérica"
produto.preco = "R$" + 220

console.log(produto)

delete produto.preco
delete produto.nome
delete produto['Marca do produto']

console.log(produto)

const Carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }], 
    calculadoraValorSeguro: function() {
        //...
    }
}

Carro.proprietario.endereco.numero = 1000
Carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante' // Trabalhosa
console.log(Carro)