const pai = { nome: 'Pedro', corCabelo: 'Preto'} 

const filha1 = Object.create(pai) // Cria um objeto novo tendo como protótipo o objeto pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo) // Saída: 'Preto' (herdado do protótipo pai)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})  

console.log(filha2.nome) // Saída: 'Bia'
filha2.nome = 'Carla' // Não é possível alterar o valor de 'nome' porque writable é false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // Saída: 'Bia tem cabelo Preto'
console.log(Object.keys(filha1)) // Saída: ['nome'] (herdado do protótipo pai)
console.log(Object.keys(filha2)) // Saída: ['nome'] (herdado do protótipo pai)

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? // hasOwnProperty(key) verifica se a propriedade está diretamente em filha2
        console.log(key) : console.log(`Por herança: ${key}`) // Saída: 'nome' (herdado do protótipo pai)
}

/* 
| Conceito             | Explicação                                                           |
| -------------------- | -------------------------------------------------------------------- |
| `Object.create(pai)` | Cria um novo objeto que herda de `pai`                               |
| `writable: false`    | Impede a modificação da propriedade                                  |
| `enumerable: true`   | Permite que a propriedade apareça em loops e `Object.keys()`         |
| `hasOwnProperty()`   | Diferencia o que é **do próprio objeto** e o que é **herdado**       |
| `Object.keys()`      | Mostra apenas propriedades **próprias e enumeráveis**                |
*/