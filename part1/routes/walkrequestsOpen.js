const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/open', async(req, res) => {
    try {
    const [open]= await db.execute(`SELECT WalkRequests.request_id, Dogs.name AS dog_name,
         WalkRequests.requested_time, WalkRequests.duration_minutes, WalkRequests.Location,
          Users.username AS owner_username
            FROM WalkRequests
            JOIN Dogs ON WalkRequests.dog_id = Dogs.dog_id
            JOIN Users ON Dogs.owner_id = Users.user_id
            WHERE WalkRequests.status = 'open';;
`);
    res.status(200).json(open);
    }catch (err) {
    res.status(500).json({ error: 'Failed to fetch open requests' });
  }
});



module.exports = router;