const express = require('express');
const router = express.Router();

const mysql = require('mysql2/promise');

/* GET home page. */
router.get('/', async function(req, res, next) {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'desafio',
            password: '123Mudar*',
            database: 'desafiobd',
            port: 3306,
        });

        const [rows] = await connection.execute('SELECT * FROM produtos');
        res.send(rows);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).send('Internal Server Error');
    }
});

/* PUT produtos listing. */
router.put('/', function(req, res, next) {
    res.send('respond with a resource PUT');
});

/* POST produtos listing. */
router.post('/', function(req, res, next) {
    res.send('respond with a resource POST');
});

/* DELETE produtos listing. */
router.delete('/', function(req, res, next) {
    res.send('respond with a resource DELETE');
});

module.exports = router;
