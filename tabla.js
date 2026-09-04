// Función para mostrar la tabla de multiplicar
function tablaMultiplicar(numero, hasta = 10) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= hasta; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Ejemplo: tabla del 7 hasta el 10
tablaMultiplicar(7, 10);

function tablaMultiplicarArray(numero, hasta = 10) {
    let resultados = [];
    for (let i = 1; i <= hasta; i++) {
        resultados.push(`${numero} x ${i} = ${numero * i}`);
    }
    return resultados;
}

console.log(tablaMultiplicarArray(5, 12));