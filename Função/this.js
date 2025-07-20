// "this" refere-se ao objeto que está sendo referenciado no contexto de uma função ou método.
//  O valor de "this" pode variar dependendo de como a função é chamada, 
//  o que pode gerar confusão se não for bem compreendido

// Quando se tem uma função tradiconal, o "this" refere-se ao objeto global 
// (ou seja, ao objeto global do navegador ou do Node.js)

// Exemplo de função tradicional
function mostrarThis() {
    console.log(this);
}

// mostrarThis(); // No navegador, isso mostrará o objeto global (window)

// Em um objeto, "this" refere-se ao próprio objeto
const pessoa = {
    nome: 'Artur',
    idade: 16,
    mostrarInfo: function() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`); // Aqui, "this" refere-se ao objeto "pessoa"
    }
};

pessoa.mostrarInfo(); // Nome: Artur, Idade: 16

// Em uma função de seta, "this" não é vinculado ao objeto global,
//  mas sim ao contexto em que a função foi definida
const mostrarThisSeta = () => {
    console.log(this);
};

mostrarThisSeta(); // No navegador, isso mostrará o objeto global (window)

const pessoa2 = {
    nome: 'Gabriel',
    idade: 16,
    mostrarInfo: () => {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`); // Aqui, "this" não se refere ao objeto "pessoa2", mas ao contexto global
        // Portanto, "this.nome" e "this.idade" serão undefined
    }
};

console.log(pessoa2.mostrarInfo()); // Nome: undefined, Idade: undefined

// Em resumo, o valor de "this" depende do contexto em que a função é chamada:
// - Em funções tradicionais, "this" refere-se ao objeto global ou ao objeto que chamou
// - Em funções de seta, "this" é vinculado ao contexto em que a função foi definida
// - Em métodos de objetos, "this" refere-se ao próprio objeto

// objeto global é o objeto que contém todas as variáveis e funções globais
// No navegador, o objeto global é o "window"
// No Node.js, o objeto global é o "global"
// No entanto, em módulos ES6, o "this" em nível de módulo é `undefined`