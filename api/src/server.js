const { request } = require("express");
const express = require("express");

//Importar rotas
const routes = require("./routes");

const app = express();
//Informar qual o formato que o servidor enviará os dados
app.use(express.json());

//Adicionando as rotas
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
