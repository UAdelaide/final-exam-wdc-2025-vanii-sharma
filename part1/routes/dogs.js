const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/dogs', async(req, res) => {
    try {
    const [dogs]= await db.execute(`SELECT Dogs.name AS dog_name, Dogs.size, Users.username AS owner_username
         FROM Dogs JOIN Users ON Dogs.owner_id = Users.user_id WHERE Users.role = 'owner';
`);
    res.status(200).json(dogs);
    }catch (err) {
    res.status(500).json({ error: 'Failed to fetch dogs' });
  }
});



module.exports = router;