const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/open', async(req, res) => {
    try {
    const [open]= await db.execute(`SELECT * FROM Dogs;
`);
    res.status(200).json(open);
    }catch (err) {
    res.status(500).json({ error: 'Failed to fetch open requests' });
  }
});



module.exports = router;