const Sequelize = require('sequelize');
const db = require('./database');

const Student = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 1.0,
      max: 4.0,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'default',
  },
});

module.exports = Student;
