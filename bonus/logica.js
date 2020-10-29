
/* Selectors */
const quantity = document.getElementById("quantity");
const minesNumb = document.getElementById("mines-numb");
const gioca = document.getElementById("gioca");

/* Event Listeners */
var listaMine = [];
gioca.addEventListener("click", (event) => {generaNumeri(event, quantity.value, minesNumb.value);});

play = false;

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
    play = true;
}

while (play) {
    const casella = document.getElementsByClassName("casella");
    console.log(casella);
    casella.addEventListener("click", verificaCasella(casella.id));
    
    function verificaCasella(x) {
        casella[x].style.backgroundColor = "gray";
    }
}