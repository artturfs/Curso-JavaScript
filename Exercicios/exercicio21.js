function funcaoDeSorte(num) {
    const sorteio = Math.random() * num + 1
    if (parseInt(sorteio) === num) {
        return `Parabens! o numero sorteado é ${num}`
    } else {
        return `Que pena! o numero sorteado é ${parseInt(sorteio)}`
    }
}

console.log(funcaoDeSorte(10))