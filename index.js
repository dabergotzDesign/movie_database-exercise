"use strict";

import  express from "express";
import { router as movieRouter } from "./movies/index.js";

const app = express();

    //app.set("view engine", "ejs");

    //app.use(express.static("public"));
    //app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    app.use("/movies", movieRouter);

    app.get("/", (req, res)=> res.redirect("/movies"));

    app.listen(8081, () =>{
        console.log("Server is listening to http://localhost:8081")
    });

