const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: "V40",
    velMax: 200
}

// Imprime o protótipo do objeto ferrari
// Como ferrari foi criado com notação literal {}, seu protótipo é Object.prototype
console.log(ferrari.__proto__);

// Verifica se o protótipo de ferrari é exatamente igual a Object.prototype
console.log(ferrari.__proto__ === Object.prototype); // true

console.log(volvo.__proto__ === Object.prototype)

// Verifica o protótipo do Object.prototype
// Isso retorna null porque Object.prototype é o topo da cadeia de protótipos
console.log(Object.prototype.__proto__); // null

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)


/*
| Conceito                     | Explicação curta                                                           |
| ---------------------------- | -------------------------------------------------------------------------- |
| `__proto__`                  | É a referência para o **protótipo (objeto pai)** de um objeto              |
| `Object.prototype`           | É o **protótipo base** de quase todos os objetos em JavaScript             |
| `Object.prototype.__proto__` | Retorna `null`, pois ele **não tem pai**: é o **fim da cadeia de herança** |
*/