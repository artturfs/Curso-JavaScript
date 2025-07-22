// Usando a notação literal

const obj1 = {}
console.log(obj1)

// Objeto em JS

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções Construtoras

function Produto (nome, preco, desc) {
    // Quando colocar 'this', significa que o atributo é público
    this.nome = nome

    // Tem escopo apenas pra função, ou seja, não está disponível para fora da função
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Maria', 1518, 5)
const f2 = criarFuncionario('Beatriz', 2100, 2)
console.log(f1.getSalario(), f2.getSalario())

// Objeto.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Object

const fromJSOM = JSON.parse('{"info": "Sou um JSON"}') // Vai transfomar o JSON em objeto
console.log(fromJSOM.info)