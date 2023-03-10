"use strict";
import { getAll, remove } from "./model.js";
import { render } from "./view.js";

export async function listAction(req, res){
    const data = await getAll();
    const body = render(data);
    res.send(body);
}

export async function removeAction(req, res){
    const id = parseInt(req.params.id, 10);
    await remove(id);
    res.redirect("/");
}