const Sequelize = require('sequelize');
const connection = require('../database/database');

const Cliente = connection.define('cliente', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

//Cliente.sync({ force: true });
console.log('The table for the User model was just (re)created!');

module.exports = Cliente;
