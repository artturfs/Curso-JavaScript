function Pessoa() {
    this.idade = 0

    setInterval(() => { // Usando arrow function para manter o contexto de "this"
        // Com arrow function, "this" se refere ao objeto Pessoa
        this.idade++ 
        console.log(this.idade) 
    }, 1000) 
    // A cada segundo, a idade da pessoa será incrementada corretamente.
    // Arrow functions não têm seu próprio "this", então elas herdam o "this"
}

new Pessoa()