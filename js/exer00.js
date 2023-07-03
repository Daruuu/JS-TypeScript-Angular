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

let i = 0;
let emoticon = '';
while (i < 7) {
    i++;
    emoticon += '*';
    console.log(emoticon);
}

//FIZZBUZZ

let i = 0;
while (i < 100){
    if (i % 3 === 0){
        console.log('FIZZ');
    }
    i++;
}

