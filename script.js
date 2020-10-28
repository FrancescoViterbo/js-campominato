/*
Descrizione
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
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
    let numeri = [];
    for (let i = 1; i < (x + 1); i++) {
        numeri.push(i);
    }
    return numeri;
}

/* Creo array che conterrà i numeri minati */
var quantitàMine = 16;
var numeriMinati = [];
 
/* Estraggo numeri casuali da "numeri" e li pusho in numeriMinati */
for (i = 0; i < quantitàMine; i++) {
    let numeroRandom = Math.floor(1 + Math.random() * (numeri.length));
    console.log(numeroRandom);
    let numeroEstratto = numeri.splice(numeroRandom, 1);
    numeriMinati.push(parseInt(numeroEstratto))
}

/* Attivo loop per giocare */
var play = true;
while (play) {
    var scelta = prompt("Scegli un numero contenuto nella lista\n" + numeri);
    scelta = parseInt(scelta);

    if (numeriMinati.contains(scelta)) {
        console.log("Hai Perso!");
        play = false;
    } else {
        console.log("Ottima scelta, niente mine. Puoi continuare");
        for (let i = 0; i < numeri.length; i++) {
            if (numeri[i] === scelta) {
                numeri.splice(numeri[i], 1);
            }
        }
    }
    
    // console.log(numeri);
}





