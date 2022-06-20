const { request } = require("express");
const express = require("express");
const app = express();
//Informar qual o formato que o servidor enviará os dados
app.use(express.json());

//POST = criação, com envio de dados
app.post("/users", (request, response) => {
  const { name, email, password } = request.body;
  /* response.send(`Usuário:${name}, Email:${email}, Password:${password}`); */

  //Responder como json
  response.json({ name, email, password });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
