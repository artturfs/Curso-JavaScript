// Função em JS é First-Class Object (Citizens)
// Higher-order function: pode receber e retornar outras funções

// Criar de forma literal
function fun1() {}

// Armazenar em uma variável
const fun2 = function() {
    return 'Sou uma função';
}

fun2()

// Armazenar em um array
const array = [function(a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 3)); // 5

// Armazenar em um atributo de objeto
const obj = {};
obj.falar = function() { return 'Opa'; };
console.log(obj.falar()); // Opa

// Passar função como parâmetro
function run(fun) {
    fun(); // Executando...
}

run(function() { console.log('Executando...'); }); 

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c); // 9
    };
}

soma(2, 3)(4); 

// Armazenar em uma variável
const sub = soma(2, 3);
sub(4); // 9
