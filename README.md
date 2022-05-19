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
  ### Todos os usuários

  Retorna todos os usuários cadastrados no banco de dados.

      GET: /users/
    
  Resposta:

      {
        "users": [
        {
          "id": 13,
          "username": "fulano",
          "email": "emaildofulano@host.com"
        },
        ...,
        {...}
      ]
    }
  ### Usuário por id

  Recebe um id e retorna o usuário encontrado com este id.

    GET: /user/?id=0

  Resposta:

    {
      "user" : {
        "id": 0,
        "username": "user",
        "email": "user@email.com"
      }
    }

  ## Tasks
  
  ### Todas as Tasks

  Recebe o id de um usuário e retorna uma lista com as tarefas cadastradas.

     GET /tasks/?id=13

  Resposta:

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

  ### Editar Tarefa

  Recebe o id da task e um objeto com os campos à serem editados e retorna a tarefa atualizada.

    PUT /tasks/?id=0

  Resposta:

    {
      "id": 0,
      "userId": 13,
      "status": "progress",
      "description": "Do portuguese presentation",
      "title": "Homework"
    }

  ### Deletar Tarefa

  Recebe o id da tarefa e a deleta.

      DELETE /tasks/?id=13

  Resposta:

    {
      "id": 0,
      "userId": 13,
      "status": "progress",
      "description": "Do portuguese presentation",
      "title": "Homework"
    }


## Login

  ### Efetuar login
  
  Receve o email e a senha do usuário e efetua login.
  
    POST /login/

  Respota:

    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImZ1bGFubyIsImVtYWlsIjoiZnVsYW5vQGdtYWlsLmNvbSJ9LCJpYXQiOjE2NTI5MDM4NDMsImV4cCI6MTY1MzUwODY0M30.gJl1CewL2rcev8jE8OwlKhT1z-zCbCtlu5R_LPyJQGk"
    }


  <details>
    <summary>Possiveis status code</summary>
      <table>
        <tr>
          <th>Status</th>
          <th>Descrição</th>
        </tr>
        <tr>
          <td>200</td>
          <td>Requisição efetuada com sucesso</td>
        </tr>
        <tr>
          <td>400</td>
          <td>Requisição efetuada com algum campo vazio</td>
        </tr>
        <tr>
          <td>401</td>
          <td>Email ou senha inválidos</td>
        </tr>
        <tr>
          <td>500</td>
          <td>Erro interno do servidor</td>
        </tr>
      </table>
  </details>


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