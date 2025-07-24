function inverso(valor) {
    const verificador = typeof valor
    
    if (verificador == 'boolean') {
        return !valor
    } else if (verificador == 'number') {
        return -valor
    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${verificador}`
    }

    
}

console.log(inverso(true))