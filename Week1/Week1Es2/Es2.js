'use strict';
// 1. Define the names of users as a comma-separated list.
const userList = "Luigi De Russis, Luca Mannella, Fulvio Corno, Juan Pablo Saenz Moreno, Luca Pezzolla"
console.log(userList);


// 2. Parse the string and create an array containing one name per array position.
const userNames=[];
const userNamesTmp = userList.split(",");
// elimin spazi bianchi iniziali
for (let name of userNamesTmp ) {
    userNames.push(name.trim());
}


// 3. Create a second array by computing the acronyms of the people as the initial letters of the name. Acronyms should be in all-capital letters.
let acronimi = [];

// ciclo su un nome alla volta
for (const name of userNames) {
    let NomeCognome = name.split(" ");      // separo nome e cognome
    let s = ""                              // definisco la stringa per ospitare l`acronimo
    for (let i = 0; i < NomeCognome.length; i++) {
        let primaLettera = NomeCognome[i].charAt(0);   // salvo la prima lettera 
        s = s.concat(primaLettera);                               // unisco la prima lettera del nome e del cognome per creare l`acronimo
    }

    acronimi.push(s.toUpperCase());  // salvo l`acronimo creato in un vettore, proseguo con il prossimo userName
}


acronimi.sort();    // ordine alfabetico
userNames.sort();

console.log(acronimi);
console.log(userNames);