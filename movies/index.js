"use strict";

import { Router } from "express";
import { 
        listAction,
        detailAction,
        createAction,
        updateAction,
        deleteAction
        //removeAction,
        //formAction,
        //saveAction    
    } from "./controller.js";

const router = Router();


router.get("/", listAction);
router.get("/:id", detailAction);
router.post("/", createAction);
router.put("/:id", updateAction);
router.delete("/:id", deleteAction);
//router.get("/delete/:id", removeAction);
//router.get("/form/:id?", formAction);
//router.post("/save", saveAction);

export {router};