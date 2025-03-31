import express from "express";
const animeRoutes = express.Router();
import animeController from "../controllers/animeController.js";

animeRoutes.get("/animes", animeController.getAllAnimes);

animeRoutes.post("/anime", animeController.createAnime);

animeRoutes.delete("/anime/:id", animeController.deleteAnime);

animeRoutes.put("/anime/:id", animeController.updateAnime);

animeRoutes.get("/anime/:id", animeController.getOneAnime);

export default animeRoutes;
