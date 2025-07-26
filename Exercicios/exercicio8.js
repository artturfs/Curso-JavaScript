
function repetir(elemento, repeticao) {
    let array = []
    for (let i = 0; i < repeticao; i++) {
        array.push(elemento)

    }
    return array
}

console.log(repetir(7, 100))