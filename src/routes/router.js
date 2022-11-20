const express = require('express');
const router = express.Router();
const { clienteController } = require('../controllers/index');

router.get('/', (req, res) => {
  clienteController.createCliente(req, res);
});

module.exports = router;
