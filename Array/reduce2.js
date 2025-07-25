const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio: Todos os  alunos são bolsistas?

const verificar = aluno => aluno.bolsista
const verificacao = alunos.map(verificar)
const resultado = verificacao.reduce(
    function(acumulador, atual) {
        return acumulador && atual
    }
)
console.log(resultado)

// Algum aluno é bolsista?

const resultado2 = verificacao.reduce(
    function(acumulador, atual) {
        return acumulador || atual
    }
)
console.log(resultado2)

// Resposta 

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))