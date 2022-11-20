const Cliente = require('../../model/clienteModel');
const clienteModel = require('../../model/clienteModel');

module.exports = class ClienteController {
  constructor() {
    this.nome;
    this.senha;
    this.email;
  }

  async createCliente(req, res) {
    try {
      console.log(req.query);
      this.nome = req.query.nome;
      this.senha = req.query.senha;
      this.email = req.query.email;
      console.log(this.nome);

      const isClientExist = await Cliente.findOne({
        where: {
          nome: this.nome,
        },
      });

      console.log(isClientExist);
      if (isClientExist === null) {
        await Cliente.create({
          nome: this.nome,
          email: this.email,
          senha: this.senha,
        });
        return res.json({ message: 'Cliente cadastrado com sucesso' });
      }
      return res.json({ message: 'Cliente já existe' });
    } catch (error) {
      console.error(error);
    }
  }
};
