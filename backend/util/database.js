const { Sequelize } = require('sequelize');
const db_conn_params = require('./db.conn.params');

const sequelize = new Sequelize(db_conn_params.database, db_conn_params.user, db_conn_params.password,{
    dialect: "mysql",
    host: db_conn_params.host, 
    port: 3307
});

module.exports = sequelize;