// Contexto léxico em JavaScript
// O contexto léxico refere-se ao local onde uma função é definida, 
// e não onde ela é chamada. Isso significa que as funções têm acesso às variáveis
// que estão no escopo onde foram definidas, mesmo que sejam chamadas em outro contexto.

const valor = 'Global'

function minhaFuncao() {
    console.log(valor);
}

function exec() {
    const valor = 'Local';
    minhaFuncao(); // Aqui, "minhaFuncao" é chamada no contexto global, então "valor" será 'Global'
}

exec(); // Chama a função exec, que por sua vez chama minhaFuncao