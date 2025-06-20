const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/dogs', async(req, res) => {
    const [rows]= await db.query(`SELECT Dogs.name AS dog_name, Dogs.size, Users.username AS FROM Dogs INNER JOIN Users ON Dogs.owner_id = Users.user_id WHERE Users.role = 'owner';
`);
    res.json(rows);
});

module.exports = router;