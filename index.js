// const express = require("express"); //importing the erd party package - this comes from type:"commonjs"
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//express.json is a middleware that converts the reuest data into json
//app.use - it intercepts all the requests
app.use(express.json());
app.use(cors());

const MONGO_URL = process.env.MONGO_URL; //connecting to atlas-making it online
async function createConnection(){
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Connected to Mongo db...");
    return client;
}
const clientdb = await createConnection();

app.get("/", function (req, res) {
  res.send("Hello ✨");
});

app.get("/movies", async function (req, res) {
  //find() in mongodb returns cursor
    let movieList =  await clientdb.db("b27we").collection("movies").find({}) 
    .toArray(); //converts cursor to array
    res.send(movieList);
  });

app.get("/movies/:id", async function (req, res) {
    let {id} =req.params;
    let movie = await clientdb.db("b27we").collection("movies").findOne({id:id});
    // let movie = movies.find((mv) => mv.id === id);
 movie ? res.send(movie) : res.status(404).send({message:"No such movie found"});
});

app.delete("/movies/:id", async function (req, res) {
  let {id} =req.params;
  let result = await clientdb.db("b27we").collection("movies").deleteOne({id:id});
  
  res.send(result);
});


app.put("/movies/:id", async function (req, res) {
  let {id} =req.params;
  let updateData = req.body;
  let result = await clientdb.db("b27we").collection("movies").updateOne({id:id},{$set:updateData});
  
  res.send(result);
});

app.post("/movies/create", async function (req, res) {
  let newMovie = req.body;
  let result = await clientdb.db("b27we").collection("movies").insertMany(newMovie);
  res.send(result);
});


app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`));