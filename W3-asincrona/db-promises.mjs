// esempio di promises

import sqlite from 'sqlite3';

const db = new sqlite.Database('qestionPromis.sqlite',
    (err)=>{if(err) throw err}
)

// 1. creo la promise, funzione asincrona
const users = new Promise((resolve, reject)=>{
    db.all("select * from user", (err, rows)=>{
        if(err)
            reject(err) // in caso di errore restituisce un erroe
        else
            resolve(rows) // se la promise viene completata, restituisce le righe
    })
});

// consumo la promise quando è pronta
// .then per le promise completate
users.then((rows)=>{
    console.log(rows);
}).catch((err)=>{ // .catch per le promise rifiutate
    console.log("Error", err);
})


// 2. stessa cosa ma fatta con una FUNZIONE Promise
function get_users() {
    return new Promise((resolve, reject)=>{
        db.all("select * from user", (err, rows)=>{
            if(err)
                reject(err)
            else
                resolve(rows)
        })
    });
}

// consumo la funzione promise
get_users().then((rows)=>{console.log(rows.length)})