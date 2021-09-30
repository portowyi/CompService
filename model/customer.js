const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Customer = sequelize.define('Customer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    patronymic: {
        type: Sequelize.STRING
    },
    street: {
        type: Sequelize.STRING
    },
    comment: {
        type: Sequelize.STRING
    },
}, {
    tableName: 'CUSTOMERS'
});

module.exports = Customer;