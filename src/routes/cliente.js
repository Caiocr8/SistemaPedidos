const Cliente = require('../controller/cliente');
const express = require('express');
const router = express.Router();

// GET
router.get('/', Cliente.getCriar);
router.get('/todos', Cliente.buscarTodos);

// POST
router.post('/', Cliente.postCriar);

module.exports = router;