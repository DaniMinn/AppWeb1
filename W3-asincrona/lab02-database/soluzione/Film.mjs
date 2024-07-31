
import dayjs from "dayjs";

export default function Film(id, title, isFavorite = false, watchDate = null, rating = null, userId = 1){
    this.id = id;
    this.title = title;
    this.favorite = isFavorite;
    this.watchDate  =watchDate; 
    this.rating = rating;
    this.userId = userId;

    this.toString = ()=>{
        const watchDate = this.watchDate ? this.watchDate.format('DD/MM/YYYY') : null

        return `Id: $(this.id), ` +
        `Title: ${this.title}, Favorite: ${this.favorite}, ` +
        `Watch date: ${watchDate}, Score: ${this.rating}, ` +
        `User: ${this.userId}`;
    }
}