/*
Hay una función Object.assign que copia todas las propiedades de un objeto
a otro.
 */

let objetoA = {a: 1, b: 2};
Object.assign(objetoA, {b: 3, c: 4});
console.log(objetoA);

let diario = [
    {
        eventos: ["trabajo", "toque un arbol", "pizza",
            "sali a correr", "television"],
        ardilla: false
    },
    {
        eventos: ["trabajo", "helado", "coliflor",
            "lasaña", "toque un arbol", "me cepille los dientes"],
        ardilla: false
    },
    {
        eventos: ["fin de semana", "monte la bicicleta", "descanso", "nueces",
            "cerveza"],
        ardilla: true
    },
    /* y asi sucesivamente... */
];