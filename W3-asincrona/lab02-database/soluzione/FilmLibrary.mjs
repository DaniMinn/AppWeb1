import sqlite3 from "sqlite3";
import dayjs from "dayjs";
import Film from "./Film.mjs";

const PATH = 'C:/Users/daniele.minnelli/Documents/90 - Privato/Formazione/AppWeb1/W3-asincrona/lab02-database/films.db';


export default function FilmLibrary(){
    
    // connetto il database
    const db = new sqlite3.Database(PATH, (err)=>{
        if(err)
            throw err;
    });

    // getAll

    // getFavories

    // getWatchedToday

    // getWatchedBefore

    // getRatedAbove

    // getContainingString

    

     /**
      * dal Lab01
     * These methods are related to exercise 2
     */
     this.deleteFilm = (id) => {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM films WHERE id = ?';
            db.run(query, [id], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            });
        });
    };

    this.addFilm = (film) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO films (title, isFavorite, watchDate, rating, userId) VALUES (?, ?, ?, ?, ?)';
            const watchDate = film.watchDate ? film.watchDate.format("YYYY-MM-DD") : null;
            let rating = undefined;
            if (!film.rating || film.rating < 1 || film.rating > 5) 
                rating = null;
            else
                rating = film.rating;
            db.run(query, [film.title, film.favorite, watchDate, rating, film.userId], function (err) {
                if (err) {
                    reject(err);
                } else {
                    film.id = this.lastID;
                    resolve(film);
                }
            });
        });
    };

    this.resetWatchDates = () => {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE films SET watchDate = NULL';
            db.run(query, [], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    };


}

