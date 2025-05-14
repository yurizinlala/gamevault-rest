# GameVault REST CRUD Local

Este repositório contém a implementação de um CRUD completo para gerenciamento de jogos, com persistência dos dados em um arquivo JSON local. A aplicação é composta por um back-end em Node.js + Express e um front-end estático em HTML, CSS e JavaScript puro.

Link do vídeo explicativo para visualizar o projeto em ação:

---

## 📋 Conteúdo

* `/rest`

  * `database.js`  – Funções de leitura/escrita em `data.json` e geração de IDs
  * `routes.js`    – Definição das rotas RESTful para operações CRUD
  * `server.js`    – Configuração do servidor Express, CORS e JSON parser

* `/frontend`

  * `index.html`   – Interface de usuário com formulário flutuante e grid de jogos
  * `script.js`    – Lógica de fetch, renderização e manipulação de formulário

* `data.json`     – Banco de dados local em formato JSON

* `README.md`     – Este arquivo de documentação

---

## 📦 Pré-requisitos

* Node.js (v12+)
* npm ou yarn
* Navegador moderno (Chrome, Firefox, Edge)
* cURL (opcional, para testes via terminal)

---

## 🚀 Instalação e execução

1. Instale dependências do back-end:

   ```bash
   cd rest
   npm install express cors body-parser
   ```

2. Inicie o servidor REST:

   ```bash
   node server.js
   ```

   O servidor ficará disponível em `http://localhost:3000`.

4. Abra o front-end:

   * Abra o arquivo `frontend/index.html` no seu navegador (ou use extensão Live Server).

---

## 🔗 Endpoints REST

Todos os endpoints usam base URL `http://localhost:3000/games`.

| Método | Rota         | Descrição               | Exemplo de Request                             |
| ------ | ------------ | ----------------------- | ---------------------------------------------- |
| GET    | `/games`     | Lista todos os jogos    | `curl -X GET http://localhost:3000/games`      |
| GET    | `/games/:id` | Busca jogo por ID       | `curl -X GET http://localhost:3000/games/1`    |
| POST   | `/games`     | Cria novo jogo          | `curl -X POST ... -d "{...}"`                  |
| PUT    | `/games/:id` | Atualiza jogo existente | `curl -X PUT ... -d "{...}"`                   |
| DELETE | `/games/:id` | Remove jogo             | `curl -X DELETE http://localhost:3000/games/1` |

### JSON de exemplo para POST/PUT

```json
{
  "title": "Xéxis Quest",
  "developer": "Xéxis Devs",
  "genre": "Aventura",
  "releaseYear": 2025,
  "platform": ["PC", "Switch"],
  "rating": 8.7,
  "status": "Backlog"
}
```

---

## 🎨 Front‑end

* O formulário flutuante permite adicionar e editar jogos.
* A grade de cards exibe informações de cada jogo e botões de **Editar** e **Excluir**.
* Todas as operações (create, read, update, delete) são feitas via `fetch()` para os endpoints REST configurados.

---

## 📝 Observações

* O arquivo `data.json` é atualizado a cada operação de escrita (POST, PUT, DELETE).
* IDs são gerados automaticamente pela função `getNextId()` em `database.js`.
* Em caso de erro, o servidor retorna status codes apropriados (404, 400, 500).

---

*Desenvolvido por Yuri Dantas (Xéxis) para a disciplina de Desenvolvimento Web — Atividade 2.*
