// app/infra/connectionFactory.js

var mysql = require('mysql');

function createDBConnection() {
	return mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'Q1w2e3!@#',
            database: 'automotivo'
        }
    );
};

// wrapper
module.exports = function() {
	return createDBConnection;
};