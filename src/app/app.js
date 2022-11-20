const express = require('express');
const router = require('../routes/router');
const connection = require('../database/database');

class App {
  constructor() {
    this.express = express();
    this.router();
    this.database();
  }

  router() {
    this.express.use(router);
  }

  database() {
    connection
      .authenticate()
      .then(() => {
        console.log('Conexão feita com sucesso!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = new App().express;
