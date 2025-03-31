import mongoose from "mongoose";

//const connect = () => {
  //mongoose.connect("mongodb://127.0.0.1:27017/anime", // Conectando ao MongoDB local
    //{ useNewUrlParser: true, useUnifiedTopology: true }
  //);
//};

const connect = () => {
  mongoose.connect(
  `mongodb+srv://jkrramos:<db_password>@cluster0.4ftgc.mongodb.net/api_anime?retryWrites=true&w=majority&appName=Cluster0`

  

  );
};

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Erro ao conectar com o mongoDB,");
});

connection.on("open", () => {
  console.log("Conectado ao mongoDB com sucesso!");
});

connect();

export default mongoose;
