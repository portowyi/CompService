const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../util/database');

const Customer = sequelize.define('Customer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    patronymic: {
        type: DataTypes.STRING
    },
    street: {
        type: DataTypes.STRING
    },
    comment: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'CUSTOMERS'
});

module.exports = Customer;