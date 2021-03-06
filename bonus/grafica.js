/* Selettori */
const schermataPrincipale = document.getElementById('schermata-principale');

/* Crea grafica d'inizio */
var form = document.createElement("form");
schermataPrincipale.appendChild(form);

var label = document.createElement("label");
label.setAttribute("for", "quantity");
label.innerHTML = "Seleziona la quantità di caselle:";
form.appendChild(label);

var select = document.createElement("select");
select.setAttribute("id", "quantity");
form.appendChild(select);

var option = document.createElement("option");
option.setAttribute("value", "100");
option.innerHTML = "Grande: 100";
select.appendChild(option);

option = document.createElement("option");
option.setAttribute("value", "80");
option.innerHTML = "Medio: 80";
select.appendChild(option);

option = document.createElement("option");
option.setAttribute("value", "50");
option.innerHTML = "Piccolo: 50";
select.appendChild(option);


var label = document.createElement("label");
label.setAttribute("for", "mines-numb");
label.innerHTML = "Seleziona la quantità di mine:";
form.appendChild(label);

var select = document.createElement("select");
select.setAttribute("id", "mines-numb");
form.appendChild(select);

option = document.createElement("option");
option.setAttribute("value", "16");
option.innerHTML = "Facile: 16";
select.appendChild(option);

option = document.createElement("option");
option.setAttribute("value", "24");
option.innerHTML = "Medio: 24";
select.appendChild(option);

option = document.createElement("option");
option.setAttribute("value", "32");
option.innerHTML = "Difficile: 32";
select.appendChild(option);

var button = document.createElement("button");
button.setAttribute("id", "gioca");
button.innerHTML = "Gioca!";
form.appendChild(button);

/* Genera le caselle */
function generaCaselle(x) {
    schermataPrincipale.innerHTML = "";
    var subDiv = document.createElement("div");
    subDiv.classList.add("campo-minato");
    schermataPrincipale.appendChild(subDiv);

    for(i = 1; i < (x + 1); i++) {
        var casella = document.createElement("div");
        casella.classList.add("casella");
        casella.setAttribute("id", i.toString());
        subDiv.appendChild(casella);
    }
}

/* Genera il layout a fine partita */
function sconfitta(x) {
    var scheda = document.createElement("div");
    scheda.classList.add("lost");
    schermataPrincipale.appendChild(scheda);
    var titolo = document.createElement("h1");
    titolo.innerHTML = "Hai Perso!";
    scheda.appendChild(titolo);
    var punteggio = document. createElement("h3");
    punteggio.innerHTML = "Hai totalizzato " + x + " punti.";
    scheda.appendChild(punteggio);
    var resetBtn = document.createElement("button");
    resetBtn.innerHTML = "Riavvia";
    resetBtn.setAttribute("id", "reset-btn");
    resetBtn.setAttribute("onClick", "window.location.reload()");
    scheda.appendChild(resetBtn);
}

/* Genera il layout di vittoria */
function vittoria(x) {
    /* Do un bonus vittoria di 100 punti */
    x = x + 100;
    var scheda = document.createElement("div");
    scheda.classList.add("lost");
    schermataPrincipale.appendChild(scheda);
    var titolo = document.createElement("h1");
    titolo.innerHTML = "Hai Vinto!";
    scheda.appendChild(titolo);
    var punteggio = document. createElement("h3");
    punteggio.innerHTML = "Hai totalizzato " + x + " punti.";
    scheda.appendChild(punteggio);
    var resetBtn = document.createElement("button");
    resetBtn.innerHTML = "Riavvia";
    resetBtn.setAttribute("id", "reset-btn");
    resetBtn.setAttribute("onClick", "window.location.reload()");
    scheda.appendChild(resetBtn);
}