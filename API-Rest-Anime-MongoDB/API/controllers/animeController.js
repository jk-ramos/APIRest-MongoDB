import animeService from "../services/animeService.js";
import { ObjectId } from "mongodb";

const getAllAnimes = async (req, res) => {
  try {
    const animes = await animeService.getAll();
    res.status(200).json({ animes: animes });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};

const createAnime = async (req, res) => {
  try {
    const { name, genere, descriptions } = req.body;
    await animeService.Create(name, genere, descriptions);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};
const deleteAnime = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      animeService.Delete(id);
      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};
const updateAnime = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { name, genere, descriptions } = req.body;
      await animeService.Update(id, name, genere, descriptions);
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};

async function getOneAnime(req, res) {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const anime = await animeService.getOne(id);
      if (!anime) {
        res.sendStatus(404);
      } else {
        res.status(200).json({ anime: anime });
      }
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
}

export default { getAllAnimes, createAnime, deleteAnime, updateAnime, getOneAnime };
