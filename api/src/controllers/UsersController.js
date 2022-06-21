//importando error
const AppError = require("../utils/AppError");
//importar conexão com o banco
const sqliteConnection = require("../database/sqlite");
class UsersController {
  /*um controller pode ter no máximo 5 funções
  
  index = GET para listar todos os usuários registrados
  show = GET exibir um registro especifico
  create = POST criar um registro
  update = PUT atualizar um registro
  delete - DELETE para remover um registro
  */

  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();
    const checkUserExists = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    //se o email já existir disparar erro
    if (checkUserExists) {
      throw new AppError("Este  e-mail já está em uso!");
    }

    //Inserir dados
    await database.run(
      "INSERT INTO users (name,email,password) VALUES (?,?,?)",
      [name, email, password]
    );

    return response.status(201).json();
  }
}

module.exports = UsersController;
