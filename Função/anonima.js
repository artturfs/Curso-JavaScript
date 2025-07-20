const soma = function (x, y) {
    return x + y
}

const ImprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

ImprimirResultado(3, 4) // 7
ImprimirResultado(3, 4, soma) // 7
ImprimirResultado(3, 4, function (x, y) {
    return x - y
}) // -1

ImprimirResultado(3, 4, (x, y) => x * y) // 12

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar() // Opa