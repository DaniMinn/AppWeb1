// 1. installare modulo sqlite : npm install sqlite3

// 2. importare libretia sqlite
import sqlite from 'sqlite3';

// 3. creare database
const db = new sqlite.Database('provaDB.sqlite',
    (err) => {if (err) throw err;}
);

// 4. Aggiungo tabella al database, importante IF NOT EXISTS, per non crearla ogni volta che eseguo
let sql = 'CREATE TABLE IF NOT EXISTS course (id INT, code TEXT, name TEXT, CFU INT)';
db.run(sql,function (err){});

// 4. Aggiungo dati alla tabella
sql = 'INSERT INTO course VALUES (?,?,?,?)' // i placeholders '?' vengono sostituiti in ordine da [params]
db.run(sql,[1,"01TYMOV","Information system security",6],function (err){});

// 5. Recupero i dati dalla tabella
sql = 'SELECT * FROM course';
db.all(sql, (err, rows) => {        // Il metodo db.all restituisce un array di oggetti
    if (err) throw err;
    rows.forEach(row => {           // Per vedere i dettagli di ogni riga iterare sull'array
        console.log(row);
    });
});

// 6. Elimino il contenuto della tabella
sql = 'DELETE FROM course';
db.run(sql, function (err) {
    if (err) throw err;
    console.log('Contenuto della tabella eliminato')
});

db.close();