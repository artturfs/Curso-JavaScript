// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite que a função acesse variáveis de seu contexto externo mesmo após esse contexto ter sido executado
// Isso é útil para criar funções que "lembram" o ambiente em que foram criadas,
// permitindo que elas mantenham acesso a variáveis mesmo quando são chamadas fora desse ambiente.

const x = 'Global'

function fora() {
    const x = 'Local'

    function dentro() {
        return x // Aqui, "dentro" acessa a variável "x" do escopo externo "fora"
    }

    return dentro
}

const minhaFuncao = fora() // Chama a função "fora", que retorna a função "dentro"
console.log(minhaFuncao()); // Chama "minhaFuncao", que é a função "dentro" e imprime 'Local'