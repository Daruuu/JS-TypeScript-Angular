//FUNCIONES DE FLECHA

//CON 2 PARAMETROS
function potencia(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

//CON 1 PARAMETRO
const cuadrado1 = (x) => {
    return x * x;
}

const cuadrado2 = x => x * x;


// CON 0 PARAMETROS

const saludo = () => {
    console.log('hola que tal');
};


//PILA DE LLAMADAS


function saludar(quien) {
    console.log("hola " + quien);
}

saludar("dennis");
console.log("adios");


function menos(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

console.log(menos(15));
console.log(menos(15, 4));


function potencia(base, exponente = 2) {
    let result = 1;
    for (let i = 0; i < exponente; i++) {
        result *= base;
    }
    return result;
}

console.log(potencia(5));
console.log(potencia(2, 4));
