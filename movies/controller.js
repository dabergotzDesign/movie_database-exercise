"use strict";
import { getAll, remove, get, save } from "./model.js";

export async function listAction(req, res){
    const data = await getAll();
    res.render("index", {movies: data})
}

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