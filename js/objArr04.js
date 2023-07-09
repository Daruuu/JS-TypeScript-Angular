/*
Vimos push y pop, que agregan y removen elementos en el final de un array,
anteriormente en este capítulo.
Los métodos correspondientes para agregar y
remover cosas en el comienzo de un array se llaman unshift y shift.
*/

let listaDeTareas = [];

//The push() method adds new items to the end of an array.
function recordar(tarea) {
    listaDeTareas.push(tarea);
}

//The shift() method removes the first item of an array.
function getTarea() {
    return listaDeTareas.shift();
}

//The unshift() method adds new elements to the beginning of an array.
function recordarUrgentemente(tarea) {
    listaDeTareas.unshift(tarea);
}

//Este busca a través del array desde el principio hasta el final
// si no lo encuentra retorna un -1
//Para buscar un valor específico, los arrays proporcionan un método indexOf

console.log("INDEX OF");
console.log([1, 2, 3, 4, 5, 6].indexOf(2));
console.log("LAST INDEX OF");
console.log([1, 2, 3, 4, 5, 6].lastIndexOf(3));


//Otro método fundamental de array es slice (“rebanar”), que toma índices
//de inicio y fin y retorna un array que solo tiene los elementos entre ellos.
//El índice de inicio es inclusivo, el índice final es exclusivo.

const arrayStrings = ["string1", "string2", "string3", "string4", "string5", "string6", "string7", "string8", "string9", "string10"];

console.log("SLICE");
console.log(arrayStrings.slice(3, 7));

console.log("TRIM");
console.log("   okey \n ".trim());

let oracion = "Los pajaros secretarios se especializan en pisotear";
let palabras = oracion.split(" ");
console.log(palabras);

console.log(palabras.join(". "));
