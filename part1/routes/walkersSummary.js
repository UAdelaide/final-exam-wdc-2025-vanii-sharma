const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/walkers/summary', async(req, res) => {
    try {
    const [summary]= await db.execute(`SELECT * FROM Dogs;
`);
    res.status(200).json(dogs);
    }catch (err) {
    res.status(500).json({ error: 'Failed to fetch dogs' });
  }
});



module.exports = router;