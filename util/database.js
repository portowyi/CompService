const mysql = require('mysql2');
const db_conn_params = require('./db.conn.params');

const pool = mysql.createPool(db_conn_params);

module.exports = pool.promise();