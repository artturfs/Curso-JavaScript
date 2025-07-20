// Call e Apply em JavaScript
// São métodos que permitem chamar uma função com um determinado contexto (this) e argumentos
// Call: chama a função com um contexto específico e argumentos passados individualmente
// Apply: chama a função com um contexto específico e argumentos passados como um array

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda}${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
};

global.preco = 20;
global.desc = 0.1;
console.log(getPreco()); // R$20.0
console.log(produto.getPreco()); // R$3890.65

const carro = { preco: 49990, desc: 0.20 };

console.log(getPreco.call(carro)); 
console.log(getPreco.apply(carro)); // R$39992.0

console.log(getPreco.call(carro, 0.17, '$')); // $39992.0
console.log(getPreco.apply(global, [0.17, '$'])); // $399