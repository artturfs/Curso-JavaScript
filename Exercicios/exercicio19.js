function baseAltura(base, altura) {
    const area = base * altura 
    return (area / 2).toFixed(2)
}

console.log(baseAltura(10, 15))
console.log(baseAltura(9.25, 13.1))