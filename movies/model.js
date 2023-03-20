import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/moviedb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Movie = mongoose.model("Movie", {
    id: Number,
    title: String,
    year: Number
})

//id manage

export function getAll(){
    return Movie.find({});
}

export function get(id){
    return Movie.findOne({ id })
}


export async function remove(id){
    const movie = await get(id);
    return movie.deleteOne();
}


export async function save(movie){
    if(!movie.id){
        const newMovie = new Movie(movie);
        newMovie.id= Date.now();
        return newMovie.save();
    }else{
        const existingMovie = await get(parseInt(movie.id, 10));
        existingMovie.title = movie.title;
        existingMovie.year = movie.year;
        return existingMovie.save();
    }
}