// Función factorial usando recursividad
function factorial(n) {
    if (n < 0) {
        return "No existe factorial para números negativos";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Ejemplo de uso
console.log(factorial(5)); // Resultado: 120


