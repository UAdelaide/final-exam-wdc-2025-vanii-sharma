const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/dogs', async(req, res) => {
    const [rows]= await db.query(`SELECT Dogs.name AS dog_name, Dogs.size, Users.username AS owner_username
         FROM Dogs JOIN Users ON Dogs.owner_id = Users.user_id WHERE Users.role = 'owner';
`);
    res.json(rows);
});


let dbConnectionPool;
  try {
    // Connect to MySQL without specifying a database
      dbConnectionPool = mysql.createPool({
socketPath: '/var/run/mysqld/mysqld.sock',
host: 'localhost',
user: 'root',
password: '',
database: 'DogWalkService'
    });

  } catch (err) {
    console.error('Error setting up database. Ensure Mysql is running: service mysql start', err);
  }

module.exports = router;