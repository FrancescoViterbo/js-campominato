
/* Selectors */
const quantity = document.getElementById("quantity");
const minesNumb = document.getElementById("mines-numb");
const gioca = document.getElementById("gioca");

/* lista mine e punteggio */
var listaMine = [];
var punteggio = 0;
var moltiplicatorePunteggio = 1;

/* Event Listeners */
gioca.addEventListener("click", (event) => {generaNumeri(event, quantity.value, minesNumb.value);});

/* Creo le arrays contenenti i numeri */
function generaNumeri(event, x, y) {
    event.preventDefault();
    x = parseInt(x);
    y = parseInt(y);

    /* Array d'appoggio per non generare numeri doppi */
    let numeri = [];
    for (i = 1; i < (x + 1); i++) {
        numeri.push(i);
    }
    
    /* Array che contiene le caselle minate */
    for (i = 0; i < y; i++) {
        let numeroRandom = Math.floor(Math.random() * (numeri.length));
        let numeroEstratto = numeri.splice(numeroRandom, 1);
        listaMine.push(parseInt(numeroEstratto));
    }
    generaCaselle(x);
    attivaGioco(x, y);
}

function attivaGioco(tiles, mines) {
    /* Il moltiplicatorePunteggio aumenta in base alla difficoltà */
    if (tiles <= 80) {
        moltiplicatorePunteggio++;
    }
    if (tiles <= 50) {
        moltiplicatorePunteggio++;
    }
    if (mines >= 24) {
        moltiplicatorePunteggio++;
    }
    if (mines >= 32) {
        moltiplicatorePunteggio++;
    }

    /* Selectors ed event listeners del campo minato */
    const campoMinato = document.querySelector(".campo-minato");
    campoMinato.addEventListener('contextmenu', event => event.preventDefault());
    /* Selectors ed event listeners di tutte le caselle */
    const caselle = document.getElementsByClassName("casella");
    for (let casella = 0; casella < caselle.length; casella++) {
        caselle[casella].addEventListener("click", () => {verificaCasella(caselle[casella].id);});
        caselle[casella].addEventListener("contextmenu", (event) => {contrassegnaCasella(event, caselle[casella].id);});
    }

    /* Al click destro aggiunge un contrassegno */
    function contrassegnaCasella(event, x) {
        event.preventDefault();
        if (caselle[x - 1].classList.contains("flaggata")) {
            caselle[x - 1].classList.remove("flaggata");
            caselle[x - 1].innerHTML = "";
            caselle[x - 1].style.backgroundColor = "";
        } else {
            caselle[x - 1].classList.add("flaggata");
            caselle[x - 1].style.backgroundColor = "lightblue";
            caselle[x - 1].innerHTML = "<img src='imgs/bandiera.png'>";
        }
    }

    /* Funzione che si attiva al click sulla casella e verifica il suo contenuto */
    function verificaCasella(x) {
        /* Se la casella cliccata è nella lista delle mine... */
        x = parseInt(x);
        let mineVicine = 0;
        if (listaMine.includes(x)) {
            caselle[x - 1].style.backgroundColor = "red";
            caselle[x - 1].innerHTML = "<img src='imgs/mina.png'>";
            /* ... avvio la funzione "sconfitta" */
            sconfitta(punteggio * moltiplicatorePunteggio);
        } else {
            /* altrimenti aumento il punteggio ed inserisco nella cartella un numero che indica le mine vicine */
            punteggio++;
            caselle[x - 1].style.backgroundColor = "gray";
            /* Ricerca caselle minate sempre valide o autoescludenti per caselle adiacenti al tetto o al pavimento*/
            if (listaMine.includes(x - 10)) {
                mineVicine++;
            }
            if (listaMine.includes(x + 10)) {
                mineVicine++;
            }
            let toCheckLastNumber = x.toString();
            /* Escludo le caselle adiacenti al bordo sinistro e destro */
            if ( (x % 10 !== 0) && (toCheckLastNumber.slice(-1) !== "1") ) {
                if (listaMine.includes(x - 1)) {
                    mineVicine++;
                }
                if (listaMine.includes(x + 1)) {
                    mineVicine++;
                }
                if (listaMine.includes(x - 11)) {
                    mineVicine++;
                }
                if (listaMine.includes(x + 11)) {
                    mineVicine++;
                }
                if (listaMine.includes(x - 9)) {
                    mineVicine++;
                }
                if (listaMine.includes(x + 9)) {
                    mineVicine++;
                }
            } else if (x % 10 === 0) {
                /* Seleziono le caselle adiacenti al bordo destro */
                if (listaMine.includes(x - 1)) {
                    mineVicine++;
                }
                if (listaMine.includes(x - 11)) {
                    mineVicine++;
                }
                if (listaMine.includes(x + 9)) {
                    mineVicine++;
                }            
            } else if (toCheckLastNumber.slice(-1) === "1") {
                /* Seleziono le caselle adiacenti al bordo sinistro */
                if (listaMine.includes(x + 1)) {
                    mineVicine++;
                }
                if (listaMine.includes(x - 9)) {
                    mineVicine++;
                }
                if (listaMine.includes(x + 11)) {
                    mineVicine++;
                }            
            }
            /* Scrivo nella casella cliccata il calcolo finale delle mine vicine */
            caselle[x - 1].innerHTML = mineVicine;
            /* Se le uniche caselle restanti sono quelle minate avvio la funzione "vittoria" */
            if (punteggio + mines === tiles) {
                vittoria(punteggio * moltiplicatorePunteggio);
            }
        }
    }
}