function soma1(a, b, c) {
    a = a || 1; // Se 'a' não for passado, assume 1
    b = b || 1; // Se 'b' não for passado, assume 1
    c = c || 1; // Se 'c' não for passado, assume 1
    return a + b + c; // Retorna a soma dos argumentos
}

console.log(soma1()); // 0
console.log(soma1(1)); // 1
console.log(soma1(1, 2)); // 3
console.log(soma1(1, 2, 3)); // 6
console.log(soma1(1, 2, 3, 4, 5)); // 6 (ignora os extras)
console.log(soma1(0, 0, 0)); // 3, pois 0 é false

// Estratégia 2, 3, 4 para definir valores padrão
function soma2(a, b, c) { // Retorna a soma dos argumentos
    a = a !== undefined ? a : 1; // Se 'a' for undefined, assume 1
    b = 1 in arguments ? b : 1; // Se 'b' for undefined, assume 1
    c = isNaN(c) ? 1 : c; // Se 'c'
    return a + b + c; // Retorna a soma dos argumentos
}
console.log(soma2()); // 3
console.log(soma2(1)); 
console.log(soma2(1, 2)); 
console.log(soma2(1, 2, 3));
console.log(soma2(1, 2, 3, 4, 5)); // 6 (ignora os extras)
console.log(soma2(0, 0, 0)); // 0

// Valor padrão do es62015

function soma3(a = 1, b = 1, c = 1) { // Define valores padrão diretamente nos parâmetros
    return a + b + c; // Retorna a soma dos argumentos
}
console.log(soma3()); 
console.log(soma3(1));
console.log(soma3(1, 2));
console.log(soma3(1, 2, 3));
console.log(soma3(1, 2, 3, 4, 5));
console.log(soma3(0, 0, 0)); 0