function objetoParaArray(obj) {
    const chaveValor = Object.entries(obj)
    return chaveValor
}

console.log(objetoParaArray({
  nome: "Artur",
  idade: 18,
  cidade: "Fortaleza"
}))
