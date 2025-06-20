const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/summary', async(req, res) => {
    try {
    const [summary]= await db.execute(`SELECT
    Users.username AS walker_username,
    COUNT(WalkRatings.rating) AS total_ratings,
    AVG(WalkRatings.rating) AS average_rating,
    (
        SELECT COUNT(*)
        FROM WalkRequests
        JOIN WalkApplications ON WalkRequests.request_id = WalkApplications.request_id
        WHERE WalkRequests.status = 'completed' AND WalkApplications.walker_id = Users.user_id
    ) AS completed_walks

FROM Users
LEFT JOIN WalkRatings ON Users.user_id = WalkRatings.walker_id
WHERE Users.role = 'walker'
GROUP BY Users.user_id;;
`);
    res.status(200).json(summary);
    }catch (err) {
    res.status(500).json({ error: 'Failed to fetch walkers summary' });
  }
});



module.exports = router;