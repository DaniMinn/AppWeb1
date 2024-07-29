// esempio di promises

import sqlite from 'sqlite3';

const db = new sqlite.Database('qestionPromis.sqlite',
    (err)=>{if(err) throw err}
)

// creo la promise, funzione asincrona
const users = new Promise((resolve, reject)=>{
    db.all("select * from user", (err, rows)=>{
        if(err)
            reject(err) // in caso di errore restituisce un erroe
        else
            resolve(rows) // se la promise viene completata, restituisce le righe
    })
});


// creo una funzione Promise
function get_users() {
    return new Promise((resolve, reject)=>{
        db.all("select * froom user", (err, rows)=>{
            if(err)
                reject(err)
            else
                resolve(rows)
        })
    });
}

console.log(users)

// .then per le promise completate
users.then((rows)=>{
    console.log(rows);
}).catch((err)=>{ // .catch per le promise rifiutate
    console.log("Error", err);
})

get_users().then((rows)=>{console.log(rows.length)})