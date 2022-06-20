const { request } = require("express");
const express = require("express");
const app = express();
const PORT = 3333;

//GET = pegar resposta/Route params
app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params;

  response.send(`id da mensagem: ${id}.
  Para o usuário ${user}`);
});

//GET = pegar resposta/Query params
app.get("/users", (request, response) => {
  const { page, limit } = request.query;
  response.send(`Página:${page}.
  Mostrar:${limit}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
