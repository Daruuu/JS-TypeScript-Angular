// PARAMETROS RESTANTES

//si quiero acepatar cualquier cantidad de argumentos en una funcion hay que poner tres puntos
// antes del ultimo  parametro de la funcion

function maximo(...numeros) {
    let resultado = -Infinity;
    for (let n of numeros) {
        if (n > resultado)
            resultado = n;
    }
    return resultado;
}

console.log('MAX NUMERO -> ' + maximo(4, 1, 9, -2, -5));

//Puedes usar una notación de tres-puntos similar para llamar una función
//con un array de argumentos.
let numbers = [5, 1, 7];
console.log(maximo(...numbers));

let palabras = ["nunca", "entenderas"];
console.log(["tu", ...palabras, "completamente"]);

// → ["tu", "nunca", "entenderas", "completamente"]

function puntoAleatorioEnCirculo(radio) {
    let angulo = Math.random() * 2 * Math.PI;
    return {
        x: radio * Math.cos(angulo),
        y: radio * Math.sin(angulo)
    };
}

console.log(puntoAleatorioEnCirculo(2));


let {nombre} = {nombre: "daruuu", edad: "26"};
console.log(nombre);

