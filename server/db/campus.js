const Sequelize = require('sequelize');
const db = require('./database');

const Campus = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'default',
  },
  address: {
    type: Sequelize.STRING,
    allowNul: false,
    validate: { notEmpty: true },
  },
  description: { type: Sequelize.TEXT },
});

module.exports = Campus;
