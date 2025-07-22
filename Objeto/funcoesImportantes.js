const pessoa = {
    // chave: valor
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Pega as chaves dos objetos
console.log(Object.values(pessoa)) // Pega os valores dos objetos
console.log(Object.entries(pessoa)) // Cria um array com todos os subarrays que vai ter a chave e o valor

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Adiciona uma nova propriedade ao objeto pessoa chamada 'dataNascimento'
// Com configurações específicas:
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,   // aparecerá em loops e Object.keys
    writable: false,    // NÃO pode ser alterada
    value: '01/01/2025' // valor fixo
}); 

// Tentando alterar o valor da propriedade dataNascimento
pessoa.dataNascimento = '01/01/2024'; // NÃO FUNCIONA por causa de writable: false
console.log(pessoa.dataNascimento); // Continua sendo '01/01/2025'
// Object.keys() retorna um array com as chaves enumeráveis do objeto
console.log(Object.keys(pessoa));

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

/*
| Método / Função               | O que faz                                                               |
| ----------------------------- | ----------------------------------------------------------------------- |
| `Object.entries(obj)`         | Retorna um array de pares `[chave, valor]`                              |
| `forEach(([k, v]) => {})`     | Itera sobre cada par `[chave, valor]`                                   |
| `Object.defineProperty()`     | Define uma propriedade com configurações avançadas (`enumerable`, etc)  |
| `Object.keys(obj)`            | Retorna um array com as chaves enumeráveis                              |
| `Object.assign(dest, ...src)` | Copia as propriedades dos objetos fonte (`src`) para o destino (`dest`) |
*/