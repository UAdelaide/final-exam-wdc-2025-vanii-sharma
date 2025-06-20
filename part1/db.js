var mysql = require('mysql2/promise');

// var dbConnectionPool = mysql.createPool({
// socketPath: '/var/run/mysqld/mysqld.sock',
// host: '127.0.0.1',
// user: 'root',
// password: 'password',
// database: 'DogWalkService'
// });


let dbConnectionPool;
  try {
    // Connect to MySQL without specifying a database
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '' // Set your MySQL root password
    });
    // Now connect to the created database
    db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'DogWalkService'
    });

  } catch (err) {
    console.error('Error setting up database. Ensure Mysql is running: service mysql start', err);
  }
})();

module.exports = db;

