const express = require('express');
const router = express.Router();

const mysql = require('mysql2/promise');

/* GET home page. */
router.get('/', async function (req, res, next) {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'desafio',
            password: '123senha123',
            database: 'desafiobd',
            port: 3306,
        });

        const [rows] = await connection.query('SELECT * FROM clientes');
        await connection.end();

        res.send(rows);
    } catch (error) {
        console.error('Erro ao obter dados do banco de dados:', error);
        res.status(500).send('Erro interno do servidor');
    }
});

module.exports = router;

