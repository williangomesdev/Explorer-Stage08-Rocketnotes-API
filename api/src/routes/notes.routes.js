const { Router } = require("express");

//importar do controllers
const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

//instanciando na memória
const notesController = new NotesController();

notesRoutes.post("/:user_id", notesController.create);

//exportar rotas para o server.js
module.exports = notesRoutes;
