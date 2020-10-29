while (play) {
    schermataPrincipale.innerHTML = "";
    for (i = 0; i < [lista1 + lista2]; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "casellaNascosta");
        schermataPrincipale.appendChild(div);
    }
}