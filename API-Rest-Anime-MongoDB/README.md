# Documentação da API de Cadastro de Animes

![NPM](https://img.shields.io/npm/l/react)

## Introdução
Bem-vindo à API de Cadastro de Animes. Esta API permite criar, listar, atualizar e deletar registros de animes. A API foi desenvolvida utilizando Node.js e MongoDB.

## Resumo das Rotas

| Método | Rota         | Descrição                         |
|--------|--------------|-----------------------------------|
| POST   | /animes    | Cria um novo anime                |
| GET    | /animes    | Lista todos os animes             |
| GET    | /animes/:id| Obter detalhes de um anime        |
| PUT    | /animes/:id| Atualizar dados de um anime       |
| DELETE | /animes/:id| Deletar um anime                  |

## Endpoints
### - GET /anime
Esse endpoint é responsável por retornar a listagem de todos os animes cadastrados no banco de dados.

#### Parâmetros:
Nenhum

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber a listagem de todos os animes.

Exemplo de resposta:


{
    "animes": [
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
        }
    



##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor. Motivos podem incluir falhas na comunicação com o banco de dados.

Exemplo de resposta:


{
    "err": "Erro interno do servidor!"
}


### - POST /anime
Esse endpoint é responsável por cadastrar um novo anime no banco de dados.

#### Parâmetros:
title: Título do anime.<br>
year: Ano de lançamento do anime.<br>
descriptions: Descrições adicionais sobre o anime (opcional).

Exemplo de requisição:


{
    "title": "Naruto",
    "genere": "Action",
    "episodes": 220,
    "status": "Completed"
}
    



#### Respostas:
##### Criado! 201
Caso essa resposta aconteça, o novo anime foi criado com sucesso.

Exemplo de resposta: Nenhum conteúdo retornado.

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:


{
    "err": "Erro interno do servidor!"
}



### - DELETE /anime/
Esse endpoint é responsável por deletar um anime específico pelo seu ID.

#### Parâmetros:
id: ID do anime a ser deletado.

#### Respostas:
##### Sem Conteúdo! 204
Caso essa resposta aconteça, o anime foi deletado com sucesso e não há conteúdo para retornar ao cliente.

Exemplo de resposta: Nenhum conteúdo retornado.

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:


{
    "err": "ID inválido!"
}


##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:


{
    "err": "Erro interno do servidor!"
}


### - PUT /game/
Esse endpoint é responsável por atualizar as informações de um anime específico pelo seu ID.

#### Parâmetros:
id: ID do anime a ser atualizado.<br>
title: Título do anime (opcional).<br>
year: Ano de lançamento do anime (opcional).<br>
descriptions: Descrições adicionais sobre o anime (opcional).<br>

Exemplo de requisição:


{
    "title": "Naruto Shippuden",
    "genere": "Action",
    "episodes": 500,
    "status": "Completed"
}
    



#### Respostas:
##### OK! 200
Caso essa resposta aconteça, as informações do anime foram atualizadas com sucesso.

Exemplo de resposta:


{
    "_id": "60b6a9228e7a8c0017b4e1a9",
    "title": "Naruto Shippuden",
    "genre": "Action",
    "episodes": 500,
    "status": "Completed",
    "__v": 0
}



##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido ou a requisição contém dados malformados.

Exemplo de resposta:


{
    "err": "ID inválido ou dados malformados!"
}


##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:


{
    "err": "Erro interno do servidor!"
}


### - GET /anime/
Esse endpoint é responsável por retornar as informações de um anime específico pelo seu ID.

#### Parâmetros:
id: ID do anime a ser consultado.

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber as informações do anime solicitado.

Exemplo de resposta:


{
    "_id": "60b6a9228e7a8c0017b4e1a9",
    "title": "Naruto",
    "genre": "Action",
    "episodes": 220,
    "status": "Completed",
    "__v": 0
}


##### Não Encontrado! 404
Caso essa resposta aconteça, significa que o anime com o ID fornecido não foi encontrado.

Exemplo de resposta:


{
    "err": "Anime não encontrado!"
}


##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:


{
    "err": "ID inválido!"
}


##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:


{
    "err": "Erro interno do servidor!"
}
