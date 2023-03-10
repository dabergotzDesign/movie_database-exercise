"use strict";

import { Router } from "express";

const router = Router();

const data = [
    {id: 1, title: "Everything, Everywhere, All At Once", year: "2022"},
    {id: 2, title: "Babylon", year: "2022"},
    {id: 3, title: "Godzilla - King of the Monsters", year: "2019"},
];

router.get("/", (req, res)=>{
    res.send(data)
});

export {router};