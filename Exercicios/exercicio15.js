function anoBissexto (ano) {
    const bissexto = ano % 4 == 0
    const multiplo100 = ano % 100 != 0 
    const multiplo400 = ano % 400 == 0

    return (bissexto && multiplo100) || multiplo400
}

console.log(anoBissexto(2024))