// Adicionando um atributo diretamente no protótipo base de todos os objetos
Object.prototype.attr0 = '0' // Não recomendado
// Isso significa que TODOS os objetos terão acesso a attr0, mesmo que não tenham declarado diretamente

// Criando o objeto 'avo' (avô)
const avo = { attr1: 'A' }

// Criando o objeto 'pai', que herda de 'avo'
const pai = { __proto__: avo, attr2: 'B', attr3: 3 }

// Criando o objeto 'filho', que herda de 'pai'
const filho = { __proto__: pai, attr3: 'C' }

// Procurando attr0 no objeto 'filho':
// 1. Não tem no filho ➡️
// 2. Procura no pai ➡️
// 3. Procura no avo ➡️
// 4. Procura no Object.prototype ✅ ENCONTRA!

console.log(filho.attr0) // Saída: 0

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/k`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing
}

const volvo = {
    modelo: "V40",
    status() {
        return `${this.modelo}: ${super.status()}`
    }   
}

Object.setPrototypeOf(ferrari, carro) // "setPrototypeOf" serve para definir a relação de protótipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo) // Testes que mostram que usando o toString, ele mostra apenas os atributos locais

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

/*
| Termo       | Tipo                   | Função                                                         |
| ----------- | ---------------------- | -------------------------------------------------------------- |
| `__proto__` | Propriedade de objetos | Aponta para o protótipo do objeto (interno)                    |
| `prototype` | Propriedade de funções | Usado quando a função é usada com `new` para construir objetos |
*/