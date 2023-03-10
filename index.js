"use strict";
import  express from "express";
import { router as movieRouter } from "./movies/index.js";

const app = express();

app.use("/movies", movieRouter);

app.get("/", (req, res)=> res.redirect("/movies"));

app.listen(8081, () =>{
    console.log("Server is listening to http://localhost:8081")
});