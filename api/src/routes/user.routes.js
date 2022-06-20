const { Router } = require("express");

//importar do controllers
const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

//Middleware
function myMiddleware(request, response, next) {
  console.log("Você passou pelo middleware!");

  //verificar se a propriedade de administrador do site é verdadeiro para o usuário
  if (!request.body.isAdmin) {
    return response.json({ message: "user unauthorized" });
  }

  //Chama o destino
  next();
}

//instanciando na memória
const usersController = new UsersController();

usersRoutes.post("/", myMiddleware, usersController.create);

//exportar rotas para o server.js
module.exports = usersRoutes;
