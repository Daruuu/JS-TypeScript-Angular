let diario = [];

function addNewJournal(events, ardilla) {
    diario.push({events, ardilla})
}

addNewJournal(["trabajo", "helado", "coliflor", "lasayya", "sali a correr", "television", false]);
addNewJournal(["trabajo", "helado", "coliflor", "lasaña",
    "toque un arbol", "me cepille los dientes"], false);
addNewJournal(["fin de semana", "monte la bicicleta", "descanso", "nueces",
    "cerveza"], true);
console.log(diario);