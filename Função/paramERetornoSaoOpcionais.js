function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m².`);
    } else {
        return area;
    }
}

console.log(area(2, 2)); // 4
console.log(area(2)); // NaN
console.log(area()); // NaN
console.log(area(1, 3, 4, 10, 17)); 
console.log(area(5, 5)); // Valor acima do permitido: 25m².
