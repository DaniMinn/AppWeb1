

import dayjs from "dayjs";
import sqlite from "sqlite3";

// come accedo a un database .db già presente?
const PATH = 'C:/Users/daniele.minnelli/Documents/90 - Privato/Formazione/AppWeb1/W3-asincrona/lab02-database/films.db';
const db = new sqlite.Database(PATH,
  (err)=>{if(err) throw err}
);

// // verifico la corretta connessione al database 
// let sql = 'SELECT * FROM films';
// db.all(sql,[],(err, rows)=>{
//     if(err) throw err;
//     rows.forEach((rows)=>{console.log(rows)});
// });



function Film(id, title, isFavorite = false, watchDate = null, rating = 0, userId = 1) {
  this.id = id;
  this.title = title;
  this.favorite = isFavorite;
  this.rating = rating;
  // saved as dayjs object only if watchDate is truthy
  this.watchDate = watchDate && dayjs(watchDate);
  this.userId = userId

  this.toString = () => {
    return `Id: ${this.id}, ` +
    `Title: ${this.title}, Favorite: ${this.favorite}, ` +
    `Watch date: ${this.watchDate}, Score: ${this.rating}, ` +
    `User: ${this.userId}` ;
  }
}


function FilmLibrary() {
  this.list = [];

  this.addNewFilm = (film) => {
    if(!this.list.some(f => f.id == film.id))
      this.list.push(film);
    else
      throw new Error('Duplicate id');
  };

  this.deleteFilm = (id) => {
    const newList = this.list.filter(function(film, index, arr) {
      return film.id !== id;
    })
    this.list = newList;
  }

  this.resetWatchedFilms = () => {
    this.list.forEach((film) => delete film.watchDate);
  }

  this.getRated = () => {
    const newList = this.list.filter(function(film, index, arr) {
      return film.rating > 0;
    })
    return newList;
  }

  this.sortByDate = () => {
    const newArray = [...this.list];
    newArray.sort((d1, d2) => {
      if(!(d1.watchDate)) return  1;   // null/empty watchDate is the lower value
      if(!(d2.watchDate)) return -1;
      return d1.watchDate.diff(d2.watchDate, 'day')
    });
    return newArray;
  }


  // LAB2: Aggiungere i seguenti punti, come metodi asincroni 
  // di FilmLibrary

  // a. Retrieve all the stored films and return a Promise that 
  //    resolves to an array of Film objects.
  this.getAllData = () => {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM films", (err, rows) =>{
        if(err)
          reject(err)
        else
          resolve(rows)
      })
    })
  }

  //b. Retrieve all favorite films and return a Promise that resolves to an array of Film objects.
  this.getFavourites = ()=>{
    return new Promise((resolve, reject)=>{
      db.all("SELECT * FROM films WHERE isFavorite = 1", (err, rows)=>{
        if(err)
          reject(err);
        else  
          resolve(rows);
      })
    })
  }
}





function main() {
 
  const filmLibrary = new FilmLibrary();
 
  filmLibrary.getAllData().then((rows)=>{rows.forEach((row)=>{console.log(row)})});
  
  filmLibrary.getFavourites().then((rows)=>{rows.forEach((row)=>{console.log(row)})});

  // Additional instruction to enable debug 
  //debugger;
}

main();