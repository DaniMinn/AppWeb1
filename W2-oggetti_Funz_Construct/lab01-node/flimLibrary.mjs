import dayjs from 'dayjs'

// 1. Firstly, implement a constructor function to create Film objects.
function Film(id, title, favorites=false, date=null, rating=null, idP = 1) {
    this.id = id;
    this.title = title;
    this.favorites = favorites;
    this.date = date;
    this.rating = rating;
    this.idP = idP;
}

// 2. Secondly, implement a constructor function to create a FilmLibrary, an object containing an array of Films.
function FilmLibrary() {
    this.listFilms = [];

    // 3. implement the addNewFilm method, which adds a new Film object, passed as parameter
    this.addNewFilm = (film)=>{
        this.listFilms.push(film);
    }
}

// 4. Populate the FilmLibrary 
const filmLibrary = new FilmLibrary();
const film1 = new Film(1,"title 1", true, "10 marzo 2024", 5);
const film2 = new Film(2,"title 2",false, "23 Luglio 2024", 8);
const film3 = new Film(3,"title 3", true, "2 marzo 2022", 2);

filmLibrary.addNewFilm(film1);
filmLibrary.addNewFilm(film2);
filmLibrary.addNewFilm(film3);

// 5. print in the console the entire list of Films stored in the FilmLibrary
for (const film of filmLibrary.listFilms) {
    console.log(film);
}