const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os precos

Array.prototype.Precos = function () {
    let passa = obj => JSON.parse(obj)
    let valor = valor => valor.preco
    const paraDinheiro = rs => `R$ ${parseFloat(rs).toFixed(2).replace('.', ',')}`
    let resultado = this.map(passa).map(valor).map(paraDinheiro)
    console.log(resultado)
    
}

carrinho.Precos()

// Resolução

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`

const resultado = carrinho.map(paraObjeto).map(apenasPreco).map(paraDinheiro)
console.log(resultado)