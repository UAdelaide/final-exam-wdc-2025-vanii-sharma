var mysql = require('mysql2/promise');

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

module.exports = dbConnectionPool;

