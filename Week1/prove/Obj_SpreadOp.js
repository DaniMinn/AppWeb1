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

// Concetto di Closures - la variabile della funz esterna sopravvive in quella interna
// simulo oggetti usando  Concetto di Closures
function counter() {
    let value = 0;
    const nextVal = ()=>{
        value++;
        return value;
    }
    return nextVal;
}

const count1 = counter() ; //associo a count1 il valore restituito da nextVall, qui counter viene eseguito e imposta value = 1, nextVALUE NON VIENE ESEGUITA
console.log(count1()) ; // chiamando count1() eseguo la funz nextVal che aggiorna e restituisce la variabile value
console.log(count1()) ;
console.log(count1()) ;

