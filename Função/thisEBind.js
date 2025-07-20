// "bind" refere-se a um método que permite vincular um valor específico de "this" a uma função,
//  criando uma nova função com o "this" definido para o valor especificado.
// Isso é útil quando você deseja garantir que uma função seja chamada com um determinado contexto,
// independentemente de como ela é chamada posteriormente.

const pessoa = {
    nome: 'Artur',  
    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
};

const falar = pessoa.falar; // Aqui, "falar" não tem um contexto definido, então "this" será undefined
falar(); // Meu nome é undefined

const falarComBind = pessoa.falar.bind(pessoa); // Vincula o contexto de "pessoa" à função "falar"
falarComBind(); // Meu nome é Artur
// O método "bind" cria uma nova função com o "this" vinculado ao objeto especificado
// Isso é útil quando você precisa passar uma função como callback ou evento,
// garantindo que o contexto correto seja usado quando a função for chamada.

