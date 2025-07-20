let dobro = function (a) {
    return 2 * a;
}

dobro = (a) => { // Função de seta com corpo de bloco
    return 2 * a; 
}

dobro = a => 2 * a; // Função de seta com corpo de expressão

console.log(dobro(Math.PI)); // 6.283185307179586

let ola = function () {
    return 'Olá, mundo!';
}

ola = () => 'Olá, mundo!'; // Função de seta sem parâmetros

ola = _ => 'Olá, mundo!'; // Função de seta com parâmetro ignorado

console.log(ola()); // Olá, mundo!
