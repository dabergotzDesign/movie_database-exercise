"use strict";
import { getAll, remove, get, save } from "./model.js";

export async function listAction(req, res){
    try{
        const data = await getAll();
        const movieResponse = {
            data,
            links: [{rel: "self", href: req.baseUrl + "/"}],
        }
        res.json(movieResponse);    
    }catch(err){
        console.log(err);
        res.status(500).send("500, An error occurred");
    }
    //res.render("index", {movies: data})
};

export async function detailAction(req, res){
    try{
        const movie = await get(req.params.id);
        if(!movie){
            res.status(404).send("404 Entry not found");
        }
        const movieResponse = {
            movie,
            links: [{rel: "self", href: `${req.baseUrl}/${movie.id}`}]
        };
        res.json(movieResponse);
    }catch(err){
        console.log(err);
        res.status(500).send("500, An Error occurred");
    }
    
}

export async function createAction(req, res){
    try{
        const movie = {
            title: req.body.title,
            year: req.body.year
        }
        const newMovie = await save(movie);
        res.status(201).json(newMovie);
    }catch(err){
        console.log(err);
        res.status(500).send("500, An error occurred");
    }
}

export async function updateAction(req, res){
    try{
        const movie = {
            id: req.params.id,
            title: req.body.title,
            year: req.body.year
        };
        const updatedMovie = await save(movie);
        res.json(updatedMovie);
    }catch(err){
        res.status(500).json(err)
    }
}

export async function deleteAction(req, res){
    try{
        const id = parseInt(req.params.id, 10);
        await remove(id);
        console.log("movie deleted")
        res.status(204).send();
    }catch(err){
        res.status(500).send("500, An error occurred");
    }
}

/*
export async function removeAction(req, res){
    const id = parseInt(req.params.id, 10);
    await remove(id);
    res.redirect("/");
}

export async function formAction(req, res){
    let movie = {id:"", title:"", year:""};
    
    if(req.params.id){
        movie = await get(parseInt(req.params.id, 10));
    }
    res.render("form", {movie: movie})
}

export async function saveAction(req, res){

    let movie = {
        id: req.body.id,
        title: req.body.title,
        year: req.body.year
    };
    

    //Validation
    if(req.body.year === NaN){
       console.log("Year must be a number");
    }else{
        await save(movie);
        res.redirect("/movies");
    }

    
}
*/