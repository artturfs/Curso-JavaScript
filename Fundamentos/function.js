function ImprimirSoma(a, b) {
    console.log(a + b);
}   

ImprimirSoma(2, 3); // 5
ImprimirSoma(2); // NaN
ImprimirSoma(); // NaN

function Soma(a = 0, b = 0) {
    return a + b;
}

console.log(Soma(2, 3)); // 5
console.log(Soma(2)); // 2
console.log(Soma()); // 0

const Soma2 = function(a, b) {
    return a + b;
}

console.log(Soma2(2, 3)); // 5
console.log(Soma2(2)); // NaN

const Soma3 = (a, b) => { 
    return a + b;
}      

console.log(Soma3(2, 3)); // 5
console.log(Soma3(2)); // NaN