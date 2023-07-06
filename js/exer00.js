//Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo


/*
let i = 1;
while (i <= 7) {
    console.log("#");
    i += 1;
}
*/

/*
let item = '';

for (let j = 0; j < 7; j++) {
    item += '*';
    console.log(item);
}
*/

/*
let i = 0;
let emoticon = '';
while (i < 7) {
    i++;
    emoticon += '*';
    console.log(emoticon);
}

*/
//FIZZBUZZ
/*
FizzBuzz
Escribe un programa que use console.log para imprimir todos los números de
1 a 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz"
en lugar del número, y para los números divisibles por 5 (y no 3), imprime
"Buzz" en su lugar.
Cuando tengas eso funcionando, modifica tu programa para imprimir "
FizzBuzz", para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz"
o "Buzz" para números divisibles por solo uno de ellos).
(Esta es en realidad una pregunta de entrevista que se ha dicho elimina un
porcentaje significativo de candidatos a programadores. Así que si la puedes
resolver, tu valor en el mercado laboral acaba de subir).
 */

/*
let i = 0;
while (i < 100) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ')
    } else if (i % 3 === 0) {
        console.log('FIZZ');
    } else if (i % 5 === 0) {
        console.log('BUZZ');
    } else {
        console.log(i);
    }
    i++;
}
*/

/*
Tablero de ajedrez
Escribe un programa que cree un string que represente una cuadrícula de 8 ×
8, usando caracteres de nueva línea para separar las líneas. En cada posición
de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de
formar un tablero de ajedrez.
Pasar este string a console.log debería mostrar algo como esto:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 */

/*
function createTableChess(sizeTable) {

    let icon = '';
    let i = 0;

    while (i < sizeTable) {
        let j = 0;
        while (j < sizeTable) {
            if ((i + j) % 2 === 0) {
                icon += ' ';
            } else {
                icon += '#';
            }
            j++;
        }
        icon += '\n';
        i++;
    }
    return icon;
}

const lengthTable = 8;
const cuadricula = createTableChess(lengthTable);
console.log(cuadricula);

function crearCuadricula(tamaño) {
    let cuadricula = '';

    for (let i = 0; i < tamaño; i++) {
        for (let j = 0; j < tamaño; j++) {
            if ((i + j) % 2 === 0) {
                cuadricula += ' ';
            } else {
                cuadricula += '#';
            }
        }
        cuadricula += '\n';
    }
    return cuadricula;
}

const tamaño = 8;
const cuadricula = crearCuadricula(tamaño);
console.log(cuadricula);
*/

// ALCANCE ANIDADO

const humus = function (factor) {
    const ingrediente = function (cantidad, unidad, nombre) {
        let cantidadIngrediente = cantidad * factor;
        if (cantidadIngrediente > 1) {
            unidad += "s";
        }
        console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
    };

    ingrediente(1, "lata", "garbanzos");
    ingrediente(0.25, "taza", "tahini");
    ingrediente(0.25, "taza", "jugo de limón");
    ingrediente(1, "clavo", "ajo");
    ingrediente(2, "cucharada", "aceite de oliva");
    ingrediente(0.5, "cucharadita", "comino");
}


console.log(humus(4))

const potencia = (base, exponente) => {
    let result = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta++) {
        result *= base;
    }
    return result;
}


















