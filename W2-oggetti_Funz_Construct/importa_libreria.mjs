// bisogna installare il pacchatto da terminale:
// entra nella cartella del programma e digita: npm install dayjs

//'use strict'; // di default con i moduli ES

// CommonJS
//const dayjs = require('dayjs');

// ES
import dayjs from 'dayjs';

let oggi = dayjs(); // oggi
console.log(oggi.format('YYYY-MM-DD'));