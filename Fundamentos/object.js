const prod1 = {}
prod1.nome = "Artur"
prod1.idade = "16 anos"
prod1.curso = "Informática"

console.log(prod1)

const prod2 = {
    nome: "João",
    idade: "20 anos",
    curso: "Engenharia",
    endereco: {
        logradouro: "Rua A",
        numero: 123
    }
}
console.log(prod2)

const escola = [
    {
        cargo: "Aluno",
        nome: "Maria",
        idade: "18 anos",
        curso: "Matemática"
    },

    {
        cargo: "Professor",
        nome: "Carlos",
        idade: "40 anos",
        disciplina: "Física"
    },

    {
        cargo: "Diretora",
        nome: "Ana",
        idade: "50 anos",
        escola: "Escola XYZ"
    },
]

console.log(escola[3])