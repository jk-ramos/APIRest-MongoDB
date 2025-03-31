import Anime from "../models/Anime.js";

class animeService {
  async getAll() {
    try {
      const animes = await Animes.find();
      return animes;
    } catch (error) {
      console.log(error);
    }
  }
  async Create(name, genere, descriptions) {
    try {
      const newAnime = new Anime({
        name,
        genere,
        descriptions,
      });
      await newAnime.save();
    } catch (error) {
      console.log(error);
    }
  }
  
  async Delete(id) {
    try {
      await Anime.findByIdAndDelete(id);
      console.log(`O anime com id: ${id} foi deletado com sucesso!`);
    } catch (error) {
      console.log(error);
    }
  }
  async Update(id, name, genere, descriptions) {
    try {
      await Anime.findByIdAndUpdate(id, {
        name,
        genere,
        descriptions,
      });
      console.log(`Dados do anime com id: ${id} atualizados com sucesso!`);
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(id) {
    try {
      const anime = await Anime.findOne({ _id: id });
      return anime;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new animeService();
