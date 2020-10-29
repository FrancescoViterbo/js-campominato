
/* Selectors */
const quantity = document.getElementById("quantity");
const minesNumb = document.getElementById("mines-numb");
const gioca = document.getElementById("gioca");

/* Event Listeners */
var listaMine = [];
gioca.addEventListener("click", (event) => {generaNumeri(event, quantity.value, minesNumb.value);});

/* Creo le arrays contenenti i numeri */
function generaNumeri(event, x, y) {
    event.preventDefault();
    x = parseInt(x);
    y = parseInt(y);
    
    let numeriMinati = [];
    for (i = 0; i < y; i++) {
        let numeroRandom = 1 + Math.floor(Math.random() * (x));
        listaMine.push(parseInt(numeroRandom))
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
        console.log(x);
        x = parseInt(x);
        let mineVicine = 0;
        if (listaMine.includes(x)) {
            caselle[x-1].style.backgroundColor = "red";
        } else {
            caselle[x-1].style.backgroundColor = "gray";   
        }
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
        console.log(mineVicine);


        // if (x % 10 === 0) {

        // } else {
            // if (listaMine.includes(i - 10) || listaMine.includes(i + 10) || listaMine.includes(i + 1) || listaMine.includes(i - 1) || listaMine.includes(i + 11) || listaMine.includes(i - 11))
        // }
    }
}