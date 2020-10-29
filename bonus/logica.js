
/* Selectors */
const quantity = document.getElementById("quantity");
const minesNumb = document.getElementById("mines-numb");
const gioca = document.getElementById("gioca");

/* lista mine e punteggio */
var listaMine = [];
var punteggio = 0;

/* Event Listeners */
gioca.addEventListener("click", (event) => {generaNumeri(event, quantity.value, minesNumb.value);});

/* Creo le arrays contenenti i numeri */
function generaNumeri(event, x, y) {
    event.preventDefault();
    x = parseInt(x);
    y = parseInt(y);

    let numeri = [];
    for (i = 1; i < (x + 1); i++) {
        numeri.push(i);
    }
    
    for (i = 0; i < y; i++) {
        let numeroRandom = Math.floor(Math.random() * (numeri.length));
        let numeroEstratto = numeri.splice(numeroRandom, 1);
        listaMine.push(parseInt(numeroEstratto));
    }
    generaCaselle(x);
    attivaGioco();
}

function attivaGioco() {
    const caselle = document.getElementsByClassName("casella");
    console.log(caselle);
    for (let casella = 0; casella < caselle.length; casella++) {
        caselle[casella].addEventListener("click", () => {verificaCasella(caselle[casella].id);});
    }

    function verificaCasella(x) {
        console.log(listaMine);
        x = parseInt(x);
        let mineVicine = 0;
        if (listaMine.includes(x)) {
            caselle[x - 1].style.backgroundColor = "red";
            caselle[x - 1].innerHTML = "Mina!";
            sconfitta(punteggio);
        } else {
            punteggio++;
            caselle[x - 1].style.backgroundColor = "gray";   
            if (listaMine.includes(x - 10)) {
                mineVicine++;
            }
            if (listaMine.includes(x + 10)) {
                mineVicine++;
            }
            let toCheckLastNumber = x.toString();
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
            caselle[x - 1].innerHTML = mineVicine;
        }
    }
}