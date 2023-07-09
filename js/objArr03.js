/*
Cuando un ciclo for se vea de esta manera, con la palabra of (“de”) después
de una definición de variable, recorrerá los elementos del valor dado después of.
Esto funciona no solo para arrays, sino también para strings y algunas otras
estructuras de datos.
 */

function eventosDiario(diario) {
    let eventos = [];

    for (let entrada of diario) {
        for (let evento of entrada.eventos) {
            if (!eventos.includes(evento)) {
                eventos.push(evento);
            }
        }
    }
    return eventos;
}

// console.log(eventosDiario(DIARIO));

