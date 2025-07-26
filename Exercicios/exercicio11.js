function removerPropriedades(obj, chaveDeletada) {
    delete obj[chaveDeletada] // vai [] quando a chave esta armazenada numa variavel
    return obj
}

console.log(removerPropriedades({id: 20, nome: 'caneta', descricao: 'sla'}, "descricao"))