import express from "express";
import mongoose from "mongoose";
import Animes from "./models/Anime.js";
import User  from "./models/Users.js";


import mongoose from "./config/db-connection.js";

const app = express();

//import Anime from "./models/Anime.js"

import animeRoutes from "./routes/animeRoutes.js";
import userRoutes from "./routes/userRoutes.js";


//Configuração do express vindo da requisição
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/animes", animeRoutes);
app.use("/users", userRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/anime")


const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}.`);
});