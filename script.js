/*
Descrizione

BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
oppure gestisco qualche caso limite (es.: se utente non inserisce numeri?.. etc.)
arricchisco un pò la mia interazione/layout
[come sempre tutto ciò che faccio di bonus va messo i altra sottocartella del progetto]
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :wink:
Le validazioni e i controlli possiamo farli anche in un secondo momento.
Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve… :stuck_out_tongue:
*/


/* Chiedo all'utente con quanti numeri vuole giocare */
var numeriTotaliScelti = prompt("Con quanti numeri vuoi giocare?");
numeriTotaliScelti = parseInt(numeriTotaliScelti);

/* Avvio la funzione per generare l'array dei numeri totali */
var numeri = generaNumeri(numeriTotaliScelti);

/* Creo array contenente tutti i numeri */
function generaNumeri(x) {
    let numbs = [];
    for (let i = 1; i < (x + 1); i++) {
        numbs.push(i);
    }
    return numbs;
}

/* Creo array che conterrà i numeri minati */
var quantitàMine = 16;
var numeriMinati = [];
 
/* Estraggo numeri casuali da "numeri" e li pusho in numeriMinati */
for (i = 0; i < quantitàMine; i++) {
    let numeroRandom = 1 + Math.floor(Math.random() * (numeri.length));
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
            console.log("Hai Perso!");
            play = false;
        } else {
            console.log("Ottima scelta, niente mine. Puoi continuare");
            for (let i = 0; i < numeri.length; i++) {
                if (numeri[i] === scelta) {
                    numeriScelti.push(scelta);
                    numeri.splice(i, 1);
                    numeriIndovinati++;
                }
            }
        }
    }

    if (numeriIndovinati === 5) {
        punteggio = punteggio + numeriIndovinati;
        var continua = prompt(("Bravo! Hai scelto 16 numeri non minati. Vuoi giocare ancora?").toString());
        continua = continua.toLowerCase();
        if (continua === "si") {
            numeriIndovinati = 0;
        } else {
            console.log("Grazie per aver giocato! Il tuo punteggio è:\n" + punteggio);
            play = false;
        }
    }
}





