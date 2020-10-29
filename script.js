/* Genero l'array delle caselle generiche (100 caselle) */
var numeri = [];
for (let i = 1; i < (100 + 1); i++) {
    numeri.push(i);
}

/* Creo array che conterrà i numeri minati (16 mine) */
var quantitàMine = 16;
var numeriMinati = [];

/* Estraggo numeri casuali da "numeri" e li pusho in numeriMinati */
for (i = 0; i < quantitàMine; i++) {
    let numeroRandom = 1 + Math.floor(Math.random() * (numeri.length - 1));
    let numeroEstratto = numeri.splice(numeroRandom, 1);
    numeriMinati.push(parseInt(numeroEstratto))
}

console.log(numeri); // per debug
console.log(numeriMinati); // per debug
/* Attivo loop per giocare */
var play = true;
var numeriIndovinati = 0;
var punteggio = 0;
var numeriScelti = [];
while (play) {
    var scelta = prompt("Scegli un numero. Hai già scelto:\n" + numeriScelti);
    scelta = parseInt(scelta);

    if (numeriScelti.includes(scelta)) {
        console.log("Hai già scelto questo numero")
    } else {
        if (numeriMinati.includes(scelta)) {
            console.log("Hai Perso!Il tuo punteggio è:\n" + punteggio);
            play = false;
        } else {
            console.log("Ottima scelta, niente mine. Puoi continuare");
            for (let i = 0; i < numeri.length; i++) {
                if (numeri[i] === scelta) {
                    numeriScelti.push(scelta);
                    numeri.splice(i, 1);
                    numeriIndovinati++;
                    punteggio++;
                }
            }
        }
    }

    if (numeriIndovinati === 5) {
        var continua = prompt(("Bravo! Hai scelto 5 numeri non minati. Vuoi giocare ancora?").toString());
        continua = continua.toLowerCase();
        if (continua === "si") {
            numeriIndovinati = 0;
        } else {
            console.log("Grazie per aver giocato! Il tuo punteggio è:\n" + punteggio);
            play = false;
        }
    }
}
