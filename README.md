# Task Manager

  Api para gerenciamento de tarefas. Com essa API é possível cadastrar, editar e deletar tarefas, criar usuários e fazer login.
  Esse projeto faz parte do desafio técnico para a empresa fictícia Ebytr, mais informações [aqui](https://github.com/LaizaBertelli/ebytr-dt).

  Você pode acompanhar a api funcionando através deste link: [ebytr-task-manager](https://lb-task-manager.herokuapp.com/)


# Sumário

01. [Como Usar](#como-usar)
01. [Banco de Dados](#banco-de-dados)
01. [API](#api)

    01. [Users](#users)
    01. [Tasks](#tasks)
    01. [Login](#login)

# Como Usar

Para rodar este app localmente:

  01. Clone o repositório

    git clone git@github.com:LaizaBertelli/ebytr-back.git

  02. Entre no diretório do projeto

    cd ebytr-back

  03. Instale as dependências.

    npm install

  04. Crie um arquivo .env na raiz do projeto. Você pode renomear e editar o arquivo .env.example

    PORT=listening_port
    DB=data_base_name
    DB_USER=your_sql_user
    DB_HOST=your_host
    DB_PASSWORD=your_sql_password
    JWT_SECRET=palavra_secreta

  05. Crie o banco de dados.

    npm run db:create

  06. Inicie a aplicação.

    npm run start


# Banco de Dados

## Estrutura

  ![db table structure](/assets/db_structure.png)

# API

  ## Users
  <br>

  ## Todos os usuários 

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
      <td>404</td>
      <td>Nenhum usuário encontrado</td>
    </tr>
    <tr>
      <td>500</td>
      <td>Erro interno do servidor</td>
    </tr>
  </table>
</details>

  <br>

  ## Usuário por id

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
      <td>404</td>
      <td>Nenhum usuário encontrado com esse id</td>
    </tr>
    <tr>
      <td>500</td>
      <td>Erro interno do servidor</td>
    </tr>
  </table>
</details>
<br>

## Criar usuário

  Recebe email, senha, nome e cria um novo usuário.

      POST /users/

  Resposta:

      {
        "id": 26,
        "username": "newuser",
        "email": "newuser@host.com",
        "password": "Z2FsbzEzZ2Fsbw=="
      }

<details>
  <summary>Possiveis status code</summary>
<table>
    <tr>
      <th>Status</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>201</td>
      <td>Requisição efetuada com sucesso</td>
    </tr>
    <tr>
      <td>400</td>
      <td>Senha, email ou nome de usuário inválidos ou vazios</td>
    </tr>
    <tr>
      <td>500</td>
      <td>Erro interno do servidor</td>
    </tr>
  </table>
</details>
<details>
  <summary>Regras</summary>
  <ul>
    <li>O campo email deve ser um email válido e não pode estar vazio</li>
    <li>O campo username deve ter entre 4 e 10 caracteres e não pode estar vazio</li>
    <li>O campo password deve ter pelo menos 6 caracteres e não pode estar vazio</li>
  <ul>
</details>
<br>

  ## Tasks
  <br>

  ## Todas as Tasks

  Recebe o id de um usuário e retorna uma lista com as tarefas pertencentes a ele.

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
      <td>404</td>
      <td>Nenhuma tarefa encontrada</td>
    </tr>
    <tr>
      <td>500</td>
      <td>Erro interno do servidor</td>
    </tr>
  </table>
</details>
<br>

  ### Editar Tarefa

  Recebe o id da task e um objeto com os campos à serem editados e retorna a tarefa atualizada.

    PUT /tasks/?id=0



<details>
  <summary>Possiveis status code</summary>
<table>
    <tr>
      <th>Status</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>204</td>
      <td>Requisição efetuada com sucesso</td>
    </tr>
    <tr>
      <td>400</td>
      <td>Requisição efetuada com algum campo vazio</td>
    </tr>
    <tr>
      <td>401</td>
      <td>Campos Title ou Description são grandes de mais ou curtos de mais</td>
    </tr>
    <tr>
      <td>500</td>
      <td>Erro interno do servidor</td>
    </tr>
  </table>
</details>
<details>
  <summary>Regras</summary>
  <ul>
    <li>O campo status não pode estar vazio e deve ser do tipo string</li>
    <li>O campo title deve ser uma string com tamanho entre 4 e 25 caracteres e não pode estar vazio</li>
    <li>O campo description deve ser uma string com no máximo 140 caracteres, este campo não é obrigatório</li>
  </ul>
</details>

<br>

  ### Criar Tarefa

  Recebe status, title, description e id do usuário, cria uma nova tarefa e a retorna.

    POST /tasks/?id=13

Resposta:

    {
      "id": 5,
      "userId": 13,
      "status": done,
      "description": "Terminar readme do projeto",
      "title": "Documentação"
    }

<details>
  <summary>Possiveis status code</summary>
<table>
    <tr>
      <th>Status</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>201</td>
      <td>Requisição efetuada com sucesso</td>
    </tr>
    <tr>
      <td>400</td>
      <td>Requisição efetuada com algum campo vazio</td>
    </tr>
    <tr>
      <td>401</td>
      <td>Campos Title ou Description são grandes de mais ou curtos de mais</td>
    </tr>
    <tr>
      <td>500</td>
      <td>Erro interno do servidor</td>
    </tr>
  </table>
</details>
<details>
  <summary>Regras</summary>
  <ul>
    <li>O campo status não pode estar vazio e deve ser do tipo string</li>
    <li>O campo title deve ser uma string com tamanho entre 4 e 25 caracteres e não pode estar vazio</li>
    <li>O campo description deve ser uma string com no máximo 140 caracteres, este campo não é obrigatório</li>
  </ul>
</details>

<br>

  ### Deletar Tarefa

  Recebe o id da tarefa e a deleta.

      DELETE /tasks/?id=13


<details>
  <summary>Possiveis status code</summary>
<table>
    <tr>
      <th>Status</th>
      <th>Descrição</th>
    </tr>
    <tr>
      <td>204</td>
      <td>Requisição efetuada com sucesso</td>
    </tr>
    <tr>
      <td>404</td>
      <td>Nenhuma tarefa encontrada sob este id</td>
    </tr>
    <tr>
      <td>500</td>
      <td>Erro interno do servidor</td>
    </tr>
  </table>
</details>

<br>

## Login
<br>

  ### Efetuar login
  
  Recebe o email e a senha do usuário e efetua login.
  
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

  <details>
    <summary>Regras</summary>
    <ul>
      <li> O campo email deve ser um email válido e não pode estar vazio. </li>
      <li> O campo password deve possuir pelo menos 6 caracteres e não pode estar vazio </li>
    </ul>
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