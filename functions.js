// Crea un objeto vacío llamado 'Math'.
const Math = {};

// Define la función 'add' que suma dos números.
function add(a, b) {
    return a + b;
}

// Define la función 'substract' que resta el segundo número del primero.
function substract(a, b) { 
    return a - b;
}

// Define la función 'multiply' que multiplica dos números.
function multiply(a, b) {
    return a * b;
}

// Define la función 'divide' que divide el primer número por el segundo, maneja la división por cero.
function divide(a, b) {
    if (b == 0)  {
        return "error: no se puede dividir entre cero";
    } else {
        return a / b;
    }
}

// Asigna las funciones al objeto 'Math'.
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

// Exporta el objeto 'Math' para que esté disponible para su uso en otros módulos.
module.exports = Math;
