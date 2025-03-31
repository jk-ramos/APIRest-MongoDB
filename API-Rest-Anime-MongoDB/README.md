# Documentação da API de Cadastro de Animes

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Introdução
Bem-vindo à API de Cadastro de Animes. Esta API permite criar, listar, atualizar e deletar registros de animes. A API foi desenvolvida utilizando Node.js e MongoDB.

## Resumo das Rotas

| Método | Rota         | Descrição                         |
|--------|--------------|-----------------------------------|
| POST   | `/animes`    | Cria um novo anime                |
| GET    | `/animes`    | Lista todos os animes             |
| GET    | `/animes/:id`| Obter detalhes de um anime        |
| PUT    | `/animes/:id`| Atualizar dados de um anime       |
| DELETE | `/animes/:id`| Deletar um anime                  |

---

## Endpoint: Criar um novo anime

**URL:** `/animes`  
**Método:** `POST`  
**Descrição:** Cria um novo anime.  
**Corpo da requisição:**

```json
{
    "title": "Naruto",
    "genre": "Action",
    "episodes": 220,
    "status": "Completed"
}

# Respostas:
# 201 Created:

{
    "_id": "60b6a9228e7a8c0017b4e1a9",
    "title": "Naruto",
    "genre": "Action",
    "episodes": 220,
    "status": "Completed",
    "__v": 0
}

400 Bad Request:

{
    "errors": [
        {
            "msg": "Title is required",
            "param": "title",
            "location": "body"
        }
    ]
}

## Endpoint: Listar todos os animes

**URL:** `/animes`  
**Método:** `GET`  
**Descrição:** Lista todos os animes cadastrados. 
**Respostas:**
**200 OK**


[
    {
        "_id": "60b6a9228e7a8c0017b4e1a9",
        "title": "Naruto",
        "genre": "Action",
        "episodes": 220,
        "status": "Completed",
        "__v": 0
    },
    {
        "_id": "60b6a9228e7a8c0017b4e1b0",
        "title": "One Piece",
        "genre": "Adventure",
        "episodes": 970,
        "status": "Ongoing",
        "__v": 0
    }
]

## Endpoint:Obter detalhes de um anime

**URL:** `/animes/:id`  
**Método:** `GET`  
**Descrição:** Obtém os detalhes de um anime específico pelo seu ID.
**Exemplo de URL:** `/animes/60b6a9228e7a8c0017b4e1a9`
**Respostas:**
**200 OK**


{
    "_id": "60b6a9228e7a8c0017b4e1a9",
    "title": "Naruto",
    "genre": "Action",
    "episodes": 220,
    "status": "Completed",
    "__v": 0
}

**404 Not Found:**

{
    "message": "Anime not found"
}


## Endpoint:Atualizar dados de um anime

**URL:** `/animes/:id`  
**Método:** `PUT`  
**Descrição:** Atualiza os dados de um anime específico pelo seu ID.
**Exemplo de URL:** `/animes/60b6a9228e7a8c0017b4e1a9`
**Corpo da requisição**

{
    "title": "Naruto Shippuden",
    "genre": "Action",
    "episodes": 500,
    "status": "Completed"
}

**Respostas:**
**200 OK:**

{
    "_id": "60b6a9228e7a8c0017b4e1a9",
    "title": "Naruto Shippuden",
    "genre": "Action",
    "episodes": 500,
    "status": "Completed",
    "__v": 0
}

**400 Bad Request:**

{
    "errors": [
        {
            "msg": "Episodes must be a positive integer",
            "param": "episodes",
            "location": "body"
        }
    ]
}

**404 Not Found:**

{
    "message": "Anime not found"
}

## Endpoint:Deletar um anime

**URL:** `/animes/:id`  
**Método:** `DELETE`  
**Descrição:** Deleta um anime específico pelo seu ID.
**Exemplo de URL:** `/animes/60b6a9228e7a8c0017b4e1a9`
**Respostas:**
**200 OK:**

{
    "message": "Anime deleted successfully"
}

**404 Not Found:**

{
    "message": "Anime not found"
}

**Estrutura do Banco de Dados**
**Anime Schema:**

const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    episodes: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Ongoing', 'Completed']
    }
});

const Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;