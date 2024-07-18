// ogetto JS
let automobile = {
    marchio: "Fiat",
    modello: "Panda",
    cavalli: 69
}

// Accesso 1
console.log(automobile.marchio);

// Accesso 2
console.log(automobile["modello"]);

// Accesso 3
let modello = "cavalli"
console.log(automobile[modello]);


// Spread Operator
let automobile2 = {...automobile,colore: "Rosso"}
console.log(automobile2);