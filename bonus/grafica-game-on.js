while (play) {
    schermataPrincipale.innerHTML = "";
    for (i = 0; i < (lista1.length + lista2.length); i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "casellaNascosta");
        schermataPrincipale.appendChild(div);
    }
}