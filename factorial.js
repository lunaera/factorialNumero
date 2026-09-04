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
console.log(factorial(23));



function factorialIterativo(n) {
    if (n < 0) {
        return "No existe factorial para números negativos";
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(factorialIterativo(8)); // Resultado: 120
console.log(factorialIterativo(4)); // Resultado: 120


// Función para imprimir la serie factorial
function serieFactorial(n) {
    if (n < 0) {
        console.log("No existe factorial para números negativos");
        return;
    }

    let resultado = 1;
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            resultado = 1;
        } else {
            resultado *= i;
        }
        console.log(`${i}! = ${resultado}`);
    }
}

// Ejemplo: serie hasta 10
serieFactorial(10);


let x = 4;
let y = 5;
console.log(x + y);

// Función para mostrar la tabla de multiplicar
function tablaMultiplicar(numero, hasta = 10) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= hasta; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Ejemplo: tabla del 7 hasta el 10
tablaMultiplicar(7, 10);
