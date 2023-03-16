import { MongoClient } from "mongodb";

/* let data = [
    {id: 1, title: "Everything, Everywhere, All At Once", year: "2022"},
    {id: 2, title: "Babylon", year: "2022"},
    {id: 3, title: "Godzilla - King of the Monsters", year: "2019"},
]; */

let collection = null;

async function connect(){
    if(collection){
        return collection;
    }
    const client = new MongoClient("mongodb://127.0.0.1:27017");

    await client.connect();

    const db = client.db("moviedb");
    collection = db.collection("Movies");

    return collection;
}

//id manage

export async function getAll(){
    const collection = await connect();
    const docs = await collection.find({});
    return docs.toArray();
}

export async function get(id){
    const collection = await connect();
    const doc = await collection.findOne({id});
    return doc;
}


export async function remove(id){
    const collection = await connect();
    return collection.deleteOne({id});
}

async function insert(movie){
    movie.id= Date.now();
    const collection = await connect();
    const data = collection.insertOne(movie);
    return data;
}

async function update(movie){
    movie.id = parseInt(movie.id, 10);
    const collection = await connect();
    await collection.updateOne({id: movie.id}, {$set: movie});
    return movie;
}



export function save(movie){
    if(!movie.id){
        return insert(movie);
    }else{
        return update(movie);
    }

    /* if(movie.id === ''){
        insert(movie);
    }else{
        update(movie);
    }
    return Promise.resolve(); */
}