const Funcionario = require('../controller/funcionario');
const express = require('express');
const router = express.Router();

router.get('/', Funcionario.getCriar);
router.get('/todos', Funcionario.buscarTodos);

router.post('/', Funcionario.postCriar);

module.exports = router;