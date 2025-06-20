var mysql = require('mysql2/promise');

var dbConnectionPool = mysql.createPool({
socketPath: '/var/run/mysqld/mysqld.sock',
host: '127.0.0.1',
user: 'root',
password: 'password',
database: 'DogWalkService'
});

module.exports = dbConnectionPool;
