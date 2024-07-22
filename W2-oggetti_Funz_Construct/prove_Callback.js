function commenta(testo) {
    console.log(testo);
}

function creaCommento(testo, callback) {
    const myTesto = `come ho sempre detto, '${testo}'`;
    callback(myTesto);
}

// nella funzione creaCommento gli passo il commento e un`altra funzione commenta(),
// la funzione commenta ha il ruolo di callback, viene richiamata dentro la funzione creaCommento
creaCommento("che storia!",commenta); 