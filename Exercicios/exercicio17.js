function despesasTotais(arrayObj) {
    const reduce = arrayObj.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
    return reduce
}

console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]))