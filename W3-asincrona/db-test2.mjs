import sqlite from 'sqlite3';

const db = new sqlite.Database('questions.sqlite',
    (err)=>{if(err) throw err}
)

// stampa id e nome per ogni entry della tabella user
db.each("SELECT * FROM user", (err,row)=>{
    if(err)
        throw err;

    console.log(row.id, row.name);
})

// all prende tutto il contenuto della tabella user, poi si usa forEach per vederne i dati
db.all("SELECT * FROM user", (err, rows)=>{
    if(err)
        throw err;

    console.log(rows); // stampa solo l'oggetto, non si vede il contenuto
    rows.forEach((r)=>{console.log(r.name);})
})

// usando una funzione con callback
function get_users(callback) {
    db.all("SELECT * FROM user", (err, rows)=>{
        if(err)
            callback(err);
        else
            callback(none,rows)
    });
}

get_users((err, rows)=>{
    console.log((rows.length));
})

const userId = 3;

db.get("SELECT * FROM user WHERE id=?", [userId], (err, row)=>{
    console.log(`USER $(userId) IS `, row.name);
})

// db.close()


