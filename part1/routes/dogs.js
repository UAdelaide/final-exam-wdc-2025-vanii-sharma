const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/dogs', async(req, res) => {
    const [rows]= await db.query(`SELECT * FROM Dog;
`);
    res.json(rows);
});

module.exports = router;