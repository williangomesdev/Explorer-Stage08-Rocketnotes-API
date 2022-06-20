const { Router } = require("express");

const usersRoutes = require("./user.routes");

const routes = Router();

routes.use("/users", usersRoutes);

//exportar rotas para o server.js
module.exports = routes;
