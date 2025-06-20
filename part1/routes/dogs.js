const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/tables', async(req, res) => {
    const [rows]= await db.query(`SELECT * FROM Dogs
`);
    res.json(rows);
});