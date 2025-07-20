// Function decalaration
function soma(x, y) {
    return x + y;
}

// Function expression
const sub = function(x, y) {
    return x - y;
}

// Named function expression, pouco usada
const mult = function mult(x, y) {
    return x * y;
}

// Arrow function
const div = (x, y) => x / y;

// Function with default parameters
function potencia(base, exp = 2) {
    return base ** exp;
}
