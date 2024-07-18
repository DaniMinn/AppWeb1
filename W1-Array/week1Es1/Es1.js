'use strict';

const score = [20, -5, -1, 100, -3, 30, 50];
console.log(score);
let NN = 0;

// conto i negativi
for (const it of score) {
    if (it < 0) {
        NN++;  
    }
}

// duplico array score eliminando i negativi
const scoreMod = score.filter(el => el >= 0);
console.log(scoreMod);

// ordino array per valori crescenti
scoreMod.sort((a,b)=> a - b);
console.log(scoreMod);

// elimino i primi due valori: i due più picoli
scoreMod.shift();
scoreMod.shift();
console.log(scoreMod);

// calcolo media
let sum = 0;
for (const el of scoreMod) {
    sum += el
}
let media = Math.round(sum / scoreMod.length);

// Aggingo NN+2 valori all`array, uguali a media
for (let i = 0; i < NN+2; i++) {
    scoreMod.push(media);
}

console.log(score);
console.log(scoreMod);


