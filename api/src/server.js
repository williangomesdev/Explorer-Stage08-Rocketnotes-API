const { request } = require("express");
const express = require("express");
const app = express();
const PORT = 3333;

//POST = criação, com envio de dados
app.post("/users", (request, response) => {
  response.send("Você chamou o POST");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
