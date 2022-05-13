# Task Manager

  Api para gerenciamento de tarefas, esse projeto faz parte do desafio técnico para a empresa fictícia Ebytr, mais informações [aqui](https://github.com/LaizaBertelli/ebytr-dt).


# Banco de Dados

## Estrutura

  ![db table structure](/assets/db_structure.png)

## Script

  Para popular o banco de dados, use esse script com dados fictícios.

      # enter code here


# API

  ## Users
  ### GET user by Id

  Recebe um id e retorna o usuário encontrado.

    GET: /user/?id=0

  Response:

    {
      "id": 0,
      "username": "user",
      "email": "user@email.com"
    }

  ## Tasks
  
  ### GET Tasks

  Recebe o id do usuário e retorna uma lista com as tarefas cadastradas.

      /tasks/?id=13

  Response:

     [
        {
        "id": 0,
        "userId": 13,
        "status": "done",
        "description": "Do math homework for tomorrow",
        "title": "Homework",
      },
      { ... },
      ...
     ]

  ### Edit Task

  Recebe o id da task e um objeto com os campos à serem editados e retorna a tarefa atualizada.

    PUT /tasks/?id=0

  Response:

    {
      "id": 0,
      "userId": 13,
      "status": "progress",
      "description": "Do portuguese presentation",
      "title": "Homework"
    }



  <!-- <table>
    <tr>
      <th>Campos</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>id</td>
      <td>id único do usuário</id>
    </tr>
    <tr>
      <td>username</td>
      <td>nomde de usuário</id>
    </tr>
    <tr>
      <td>email</td>
      <td>email do usuário</id>
    </tr>
  </table>



  ## Arquitetura

    |_ src
      |_ Auth
        |_ jwtGenerator.js
      |_ Controllers
        |_ login.controller.js
        |_ user.controller.js
        |_ tasks.controller.js
      |_ Routes
        |_ login.route.js
        |_ user.route.js
        |_ tasks.route.js
      |_ Models
        |_ connection.model.js
        |_ login.model.js
        |_ user.model.js
        |_ tasks.model.js
      |_ Services
        |_ login.service.js
        |_ user.service.js
        |_ tasks.service.js
      |_ Tests
        |_ Controllers
          |_ controllers.spec.js
        |_ Services
          |_ services.spec.js
        |_ Models
          |_ models.spec.js
      |_ Schemas
        |_ login.schema.js
        |_ user.schema.js
        |_ task.schema.js
      |_ Middlewares
        |_ login.middleware.js
        |_ user.middleware.js
        |_ task.middleware.js
      |_ App.js
      |_ -->