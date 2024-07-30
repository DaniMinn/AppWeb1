import dayjs from 'dayjs'

// 1. Firstly, implement a constructor function to create Film objects.
function Film(id, title, favorites=false, date=null, rating=0, idP = 1) {
    this.id = id;
    this.title = title;
    this.favorites = favorites;
    // saved as dayjs object only if watchDate is truthy
    this.date = date && dayjs(date);
    this.rating = rating;
    this.idP = idP;

    // funzione per stampare la lista dei fim
    this.toString = () => {
        return `Id: ${this.id}, ` +
        `Title: ${this.title}, Favorite: ${this.favorites}, ` +
        `Watch date: ${this.date}, Score: ${this.rating}, ` +
        `User: ${this.idP}` ;
      }
}

// 2. Secondly, implement a constructor function to create a FilmLibrary, an object containing an array of Films.
function FilmLibrary() {
    this.listFilms = [];

    // 3. implement the addNewFilm method, which adds a new Film object, passed as parameter
    this.addNewFilm = (film)=>{
        if(!this.listFilms.some(f => f.id == film.id))
            this.listFilms.push(film);
        else    
            throw new Error(`Duplicated id`);
    }
}


function main() {
    // Creating some film entries
    const pulpFiction = new Film(1, "Pulp Fiction", true, "2024-03-10", 5);
    const grams21 = new Film(2, "21 Grams", true, "2024-03-17", 4);
    const starWars = new Film(3, "Star Wars", false);
    const matrix = new Film(4, "Matrix");
    const shrek = new Film(5, "Shrek", false, "2024-03-21", 3);
  
    // Adding the films to the FilmLibrary
    const library = new FilmLibrary();
    library.addNewFilm(pulpFiction);
    library.addNewFilm(grams21);
    library.addNewFilm(starWars);
    library.addNewFilm(matrix);
    library.addNewFilm(shrek);
  
    // Print Films
    console.log("***** List of films *****");
    library.listFilms.forEach((item) => console.log(item.toString()));
  
    // Additional instruction to enable debug 
    debugger;
  }
  
  main();