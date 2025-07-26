function receberPrimeiroEUltimoElemento(array) {
    let resultado = [
        array.shift(),
        array.pop()
    ]

    return resultado
}

console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))