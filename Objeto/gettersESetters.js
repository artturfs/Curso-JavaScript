// Em JS getters e setters são métodos especiais usados para acessar e modificar propriedades de objetos
// Getter (get): método especial que é chamado automaticamente quando você acessa uma propriedade
// Setter (set): método especial que é chamado automaticamente quando você atribui um valor à propriedade



const sequencia = {
    _valor: 1, // atributo "privado" por convenção
    get valor() { return this._valor++ }, // Retorna _valor e depois incrementa (++)
    set valor(valor) {  // Atualiza _valor somente se x for maior que o atual
        if (valor > this._valor) {
            this._valor = valor
        }
    },
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 7
console.log(sequencia.valor, sequencia.valor)
