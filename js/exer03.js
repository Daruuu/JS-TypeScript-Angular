/*
Veamos un ejemplo.
Queremos escribir un programa que imprima dos números, los números de
vacas y pollos en una granja, con las palabras Vacas y Pollos después de ellos, y
ceros acolchados antes de ambos números para que siempre tengan tres dígitos
de largo.
007 Vacas
011 Pollos
Esto pide una función de dos argumentos—el numero de vacas y el numero
de pollos. Vamos a programar.
*/

/*
function calcularInventarioGranja(numCows, numChickens) {

    let strCow = String(numCows);
    while (strCow.length < 3) {
        strCow = "0" + strCow;
    }
    console.log(`${strCow} Cows`);

    let strChicken = String(numChickens);
    while (strChicken < 3) {
        strChicken = "0" + strChicken;
    }
    console.log(`${strChicken} Chickens`);
}
calcularInventarioGranja(5, 101);
*/

function printEtiquetaConCeros(numero, etiqueta) {

    let strNumero = String(numero);

    while (strNumero < 3) {
        strNumero = "0" + strNumero;
    }
    console.log(`${strNumero} ${etiqueta}`);
}

/*
function imprimirInventarioGranja(cows, chickens, pig) {
    printEtiquetaConCeros(cows, "Cows");
    printEtiquetaConCeros(chickens, "Chickens");
    printEtiquetaConCeros(pig, "Pig");
}
*/

// imprimirInventarioGranja(32, 4, 7);

function printEtiquetasAnimales(numero, cantidadCeros) {

    let string = String(numero);

    while (string.length < cantidadCeros) {
        string = "0" + string;
    }
    return string;
}


function imprimirInventarioGranja(cows, chickens, pig) {

    console.log(`${printEtiquetasAnimales(cows, 3)} Cows`);
    console.log(`${printEtiquetasAnimales(chickens, 3)} Chickens`);
    console.log(`${printEtiquetasAnimales(pig, 3)} Pigs`);
}

imprimirInventarioGranja(7, 22, 8);




