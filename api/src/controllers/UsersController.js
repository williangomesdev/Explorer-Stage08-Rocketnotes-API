//importando error
const AppError = require("../utils/AppError");
class UsersController {
  /*um controller pode ter no máximo 5 funções
  
  index = GET para listar todos os usuários registrados
  show = GET exibir um registro especifico
  create = POST criar um registro
  update = PUT atualizar um registro
  delete - DELETE para remover um registro
  */

  create(request, response) {
    const { name, email, password } = request.body;

    //usando tratamento de erro
    if (!name) {
      throw new AppError("Nome é obrigatório!");
    }

    response.status(201).json({ name, email, password });
  }
}

module.exports = UsersController;
