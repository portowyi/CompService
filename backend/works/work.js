const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Work = sequelize.define('work', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: Sequelize.DATE
    }
}, {
    tableName: 'WORKS'
});

modile.exports = Work;