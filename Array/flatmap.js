// flatmap em JavaScript combina as funcionalidades de map() e flat() em uma única operação

const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'João',
        nota: 8.9
    }, {
        nome: 'Rebeca',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)

// Exemplo de uso do flatMap para processar um array de strings e dividir cada string em um array de caracteres
const strings = ['Hello', 'World', 'JavaScript']
const caracteres = strings.flatMap(str => str.split(''))

console.log(caracteres) // Saída: ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']