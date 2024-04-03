const express = require('express');
const router = express.Router();

const mysql = require('mysql2/promise');

const produtosController = require('../controllers/produtosController');

/* GET home page. */
router.get('/', produtosController.findAll); 

/* PUT clientes listing. */
router.put('/', produtosController.update); 

/* POST clientes listing. */
router.post('/',produtosController.save);

/* DELETE clientes listing. */
router.delete('/:id', produtosController.remove);


module.exports = router;