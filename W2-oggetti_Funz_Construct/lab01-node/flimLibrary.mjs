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

    // es2.1 returns a new array containing the Films within the FilmLibrary instance sorted in
    this.sortByDate = ()=>{
        // nuovo array, contiene tutti i film di listFilms
        const newArray = [...this.listFilms];
        
        // riordino il nuovo arrray per data
        newArray.sort((d1,d2)=>{
            // gestisco le date nulle
            if(!(d1.date)) return 1;    //film con data null viene messo in fondo alla lista
            if(!(d2.date)) return -1;
            return d1.date.diff(d2.date, 'day')
        });
        return newArray;
    }

    // es2.2 deletes a Film from the FilmLibrary based on an Id received by parameter.
    this.deleteFilm = (id)=>{
        // creo nuovo array, uso filter per inserire nel nuovo array i film con id diverso da quello target da eliminare
        const newList = this.listFilms.filter(function(film, index, arr) {
            return film.id !== id;
        })
        // aggiorno la lista originale con il nuovo array filtrato
        this.listFilms = newList;
    }

    // es2.3 deletes the Watch date of all the Films in the FilmLibrary.
    this.resetDate = ()=>{
        // mi basta usare un forEach per eliminare le date nella listFilms, non creo nuovi array
        this.listFilms.forEach((film)=> delete film.date);
    }

    //es2.4 ordina i film per rating decrescente, esclude i film senza punteggio
    this.getRated = ()=>{
        // prendo la lista dei film e tengo solo quelli con rating != 0
        const newList = this.listFilms.filter(function(film,index,arr){
            return film.rating > 0;
        })
        // ordino per rating decrescente
        newList.sort((a,b)=>{
            return b.rating - a.rating;
        })

        return newList;
    }
}


function main() {
    // Creating some film entries
    const pulpFiction = new Film(1, "Pulp Fiction", true, "2024-03-10", 5);
    const grams21 = new Film(2, "21 Grams", true, "2024-03-17", 4);
    const starWars = new Film(3, "Star Wars", false);
    const matrix = new Film(4, "Matrix");
    const shrek = new Film(5, "Shrek", false, "2024-03-21", 9);
  
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
  
    // stampa film riordinati
    console.log("\n***** List of films (sorted) *****");
    const sortedFilms = library.sortByDate();
    sortedFilms.forEach((el)=>console.log(el.toString()));

    // elimina un film
    //library.deleteFilm(1);
    
    // resetto le date
    //library.resetDate();
    //console.log("***** List of films modified *****");
    //library.listFilms.forEach((item) => console.log(item.toString()));
    console.log("\n***** List of films (rating sorted) *****");

   const sortedRating =  library.getRated();
   sortedRating.forEach((el)=>console.log(el.toString()));

    // Additional instruction to enable debug 
    debugger;
  }
  
  main();