const Sequelize = require('sequelize');

const connection = new Sequelize('db_minibank', 'root', 'daniloxss123', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-03:00',
});

module.exports = connection;
