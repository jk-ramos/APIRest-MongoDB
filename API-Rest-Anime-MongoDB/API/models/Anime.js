import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
  details: String,
  episode: Number,
  season: Number,
  year: Number,
});

const animeSchema = new mongoose.Schema({
  name: String,
  genere: String,
  year: Number,
  descriptions: [descriptionSchema],
});

const Anime = mongoose.model("Anime", animeSchema);

export default Anime;
