//Importar para criptografia
const { hash } = require("bcryptjs");

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

  //Criação
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

    //Criptografia password
    const hashedPassword = await hash(password, 8);

    //Inserir dados
    await database.run(
      "INSERT INTO users (name,email,password) VALUES (?,?,?)",
      [name, email, hashedPassword]
    );

    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email } = request.body;
    const { id } = request.params;

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

    //se usuário não existir
    if (!user) {
      throw new AppError("Usuário não encontrado");
    }

    //se email ja estiver cadastrado
    const userWithUpdatedEmail = await database.get(
      "SELECT * FROM users WHERE email =(?)",
      [email]
    );

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Este e-mail já está em uso!");
    }

    user.name = name;
    user.email = email;

    await database.run(
      `UPDATE users SET name = ?, email = ?, updated_at = ? WHERE id =?`,
      [user.name, user.email, new Date(), id]
    );

    return response.json()
  }
}

module.exports = UsersController;
