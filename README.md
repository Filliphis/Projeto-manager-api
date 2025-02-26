# API para gerenciamento de projetos e tarefas.
desenvolvida com Node.js, Express.js e PostgreSQL. Esta API permite que usuários criem, editem e excluam projetos e tarefas, além de gerenciar permissões e autenticação com JWT.
## 📋 Funcionalidades

- Autenticação de Usuários:
    - Cadastro e login de usuários com JWT.
- Gerenciamento de Projetos:
    - Criar, editar e excluir projetos.
    - Listar projetos de um usuário.
- Gerenciamento de Tarefas:
    - Criar, editar e excluir tarefas.
    - Listar tarefas de um projeto.
- Controle de Permissões:
    - Diferentes níveis de acesso para administradores e usuários comuns.
- Docker
    - Configuração pronta para rodar a aplicação em containers Docker.


🛠️ Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript.

- Express.js: Framework para construção da API.

- PostgreSQL: Banco de dados relacional.

- JWT (JSON Web Tokens): Autenticação de usuários.

- Sequelize: ORM para interação com o banco de dados.

- Docker: Containerização da aplicação.


## Passos para Configuração
Clone o repositório:

```bash

git clone https://github.com/Filliphis/project-manager-api.git
cd project-manager-api
```
Instale as dependências:
``` bash

npm install
```
Configure o banco de dados:

Crie um banco de dados no PostgreSQL.

Atualize o arquivo .env com as credenciais do banco de dados:
```
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=project_manager
JWT_SECRET=segredo_jwt

```
Execute as migrações:
``` bash
npx sequelize-cli db:migrate
```
Inicie o servidor:
```
npm start
```
Ou, para desenvolvimento:
```
npm run dev
```
# 🐳 Executando com Docker
- Construa a imagem Docker:
``` bash
docker-compose build
```
- Inicie os containers: 
``` bash
docker-compose up
```
Acesse a API
- O servidor estará rodando em localhost:3000.

## 📚 Rotas da API
Autenticação
- POST /api/auth/register: 
- Registrar um novo usuário.

- POST /api/auth/login: Fazer login e obter token JWT.

Projetos

- POST /api/projects: Criar um novo projeto.

- GET /api/projects/user/:userId : Listar projetos de um usuário.

- PUT /api/projects/:id : Atualizar um projeto.

- DELETE /api/projects/:id : Excluir um projeto.

Tarefas

- POST /api/tasks: Criar uma nova tarefa.

- GET /api/tasks/project/:projectId : Listar tarefas de um projeto.

- PUT /api/tasks/:id : Atualizar uma tarefa.

- DELETE /api/tasks/:id : Excluir uma tarefa.
