const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/dogs', async(req, res) => {
    try {
    const [dogs]= await db.execute(`SHOW DATABASES;
`);
    res.status(200).json(dogs);
    }catch (err) {
    res.status(500).json({ error: 'Failed to fetch dogs' });
  }
});



module.exports = router;