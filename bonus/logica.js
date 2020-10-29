
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
    console.log(x);
    generaCaselle(x);
}
