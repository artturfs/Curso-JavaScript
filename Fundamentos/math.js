const raio = 5.6
const area = Math.PI * Math.pow(raio, 2) // Cálculo da área do círculo
console.log(area.toFixed(2)) // Arredonda para duas casas decimais
console.log(typeof Math) // Math é um objeto, não uma função
console.log(Math.ceil(area)) // Arredonda para cima
console.log(Math.floor(area)) // Arredonda para baixo
console.log(Math.round(area)) // Arredonda para o inteiro mais próximo
console.log(Math.max(1, 2, 3, 4, 5)) // Retorna o maior número
console.log(Math.min(1, 2, 3, 4, 5)) // Retorna o menor número
console.log(Math.random()) // Gera um número aleatório entre 0 e 1
console.log(parseInt(Math.random() * 10)) // Gera um número aleatório entre 0 e 10
console.log(parseInt(Math.random() * 100 + 1).toFixed(2)) // Gera um número aleatório entre 1 e 100

console.log(Math.sqrt(16)) // Raiz quadrada de 16
console.log(Math.pow(2, 3)) // 2 elevado a 3 (2^3)
console.log(Math.abs(-5)) // Valor absoluto de -5
console.log(Math.sign(-5)) // Sinal de -5 (-1 para negativo, 0 para zero, 1 para positivo)
console.log(Math.trunc(4.9)) // Parte inteira de 4.9 (truncamento)
console.log(Math.cbrt(27)) // Raiz cúbica de 27 
console.log(Math.hypot(3, 4)) // Hipotenusa de um triângulo retângulo com catetos 3 e 4
console.log(Math.imul(2, 3)) // Multiplicação inteira de 2 e 3
console.log(Math.log(10)) // Logaritmo natural de 10
console.log(Math.log10(100)) // Logaritmo base 10 de 100
console.log(Math.log2(8)) // Logaritmo base 2 de 8
console.log(Math.expm1(1)) // e^1 - 1 (exponencial menos 1)
console.log(Math.fround(1.5)) // Representação de ponto flutuante de 1.5
