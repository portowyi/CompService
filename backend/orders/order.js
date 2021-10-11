const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Customer = require('../customers/customer');

const Order = sequelize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    }, 
    archived: {
        type: Sequelize.BOOLEAN
    }, 
    closed: {
        type: Sequelize.BOOLEAN
    }
}, {
    tableName: 'ORDERS'
});

Order.Customer = Order.belongsTo(Customer);

modile.exports = Order;