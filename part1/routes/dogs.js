const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/tables', async(req, res) => {
    const [rows]= await db.query(`SHOW DATABASES;
`);
    res.json(rows);
});

module.exports = router;