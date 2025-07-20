function Pessoa() {
    this.idade = 0

    setInterval(function() { // setInterval executa a função a cada 1000ms
        this.idade++ // Aqui, "this" não se refere ao objeto Pessoa, mas ao objeto global
        console.log(this.idade)
    }.bind(this), 1000) // O método "bind" vincula o contexto de "this" à instância atual de Pessoa
    // Isso garante que "this.idade" se refira à propriedade "idade" do objeto Pessoa,
    // e não ao objeto global ou a outro contexto.
    // Assim, a cada segundo, a idade da pessoa será incrementada corretamente.
    // O método "bind" cria uma nova função com o "this" vinculado ao objeto especificado,
    // garantindo que o contexto correto seja usado quando a função for chamada.
}

new Pessoa()

function temporizador() {
    this.segundos = 0   
    const self = this

    setInterval(function() {
        self.segundos++ // Aqui, "self" refere-se ao contexto correto, que é a instância de temporizador
        console.log(self.segundos + ' segundos')
    }, 1000) // A cada segundo, o contador de segundos será incrementado corretamente
}

new temporizador()