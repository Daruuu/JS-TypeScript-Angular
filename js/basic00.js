/*
let yourName;

do {
    yourName = prompt("who are you?");
} while (!yourName);
console.log(yourName);
*/

// ROMPIENDO UN CICLO

for (let i = 20; ; i++) {
    if (i % 7 === 0) {
        console.log(i);
        break;
    }
}
/*
La palabra clave continue (“continuar”) es similar a break, en que influye el
progreso de un ciclo. Cuando continue se encuentre en el cuerpo de un ciclo,
el control salta afuera del cuerpo y continúa con la siguiente iteración del ciclo.
 */

// SWITCH

switch (prompt("como esta el clima?")) {
    case "lluvioso":
        console.log("recueda salir con paraguas.");
        break;
    case "soleado":
        console.log("vistete con poca ropa");
        break;
    case "nublado":
        console.log("ve afuera");
        break;
    default:
        console.log("tipo de clima desconocido!");
        break;
}

