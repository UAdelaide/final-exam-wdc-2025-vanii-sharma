var mysql = require('mysql2/promise');

var dbConnectionPool = mysql.createPool({
socketPath: '/var/run/mysqld/mysqld.sock',
host: 'localhost',
user: 'root',
password: 'password',
database: 'books'
});

module.exports = dbConnectionPool;
