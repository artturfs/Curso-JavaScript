const escola = "Cod3r";
console.log(escola.charAt(4)); // 'r'
console.log(escola.charAt(5)); // '' (vazio, pois não existe índice 5)

console.log(escola.charCodeAt(3)); // 51 (código ASCII do caractere '3')
console.log(escola.indexOf('3')); // 3 (índice do caractere '3')

console.log(escola.substring(1)); // 'od3r' (do índice 1 até o final)
console.log(escola.substring(0, 3)); // 'Cod' (do índice 0 até o 3, não inclui o 3)

console.log('Escola '.concat(escola).concat("!")); // 'Escola Cod3r!'
console.log(escola.replace(3, 'e')); // 'Coder' (substitui '3' por 'e')

console.log('Ana,Maria,Pedro'.split(',')); // ['Ana', 'Maria', 'Pedro'] (divide a string em um array)
console.log('Ana,Maria,Pedro'.split(/,/)); // ['Ana', 'Maria', 'Pedro'] (divide a string em um array usando regex)
console.log('Ana,Maria,Pedro'.split(/,/g)); // ['Ana', 'Maria', 'Pedro'] (divide a string em um array usando regex global)
console.log('Ana,Maria,Pedro'.split(/,/gi)); // ['Ana', 'Maria', 'Pedro'] (divide a string em um array usando regex global e case-insensitive)
