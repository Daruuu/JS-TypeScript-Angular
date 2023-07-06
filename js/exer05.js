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
