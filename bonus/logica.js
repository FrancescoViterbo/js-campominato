
/* Selectors */
const quantity = document.getElementById("quantity");
const minesNumb = document.getElementById("mines-numb");
const gioca = document.getElementById("gioca");

/* Event Listeners */
var lista1 = [];
var lista2 = [];
var play = false;
gioca.addEventListener("click", (event) => {generaNumeri(event, quantity.value, minesNumb.value);});

/* Creo array contenente tutti i numeri */
function generaNumeri(event, x, y) {
    event.preventDefault();
    x = parseInt(x);
    y = parseInt(y);

    let numbs = [];
    for (let i = 1; i < (x + 1); i++) {
        numbs.push(i);
    }

    let numeriMinati = [];
    for (i = 0; i < y; i++) {
        let numeroRandom = 1 + Math.floor(Math.random() * (numbs.length));
        let numeroEstratto = numbs.splice(numeroRandom, 1);
        numeriMinati.push(parseInt(numeroEstratto))
    }
    lista1 = numbs;
    lista2 = numeriMinati;
    play = true;
    console.log([lista1, lista2, play]);
}

while (play) {
    prompt("stai giocando");
}






