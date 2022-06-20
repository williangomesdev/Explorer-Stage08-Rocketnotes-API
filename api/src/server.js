const express = require("express");
const app = express();
const PORT = 3333;

//GET = pegar resposta
app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params;

  response.send(`id da mensagem: ${id}.
  Para o usuário ${user}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
