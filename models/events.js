const Sequelize = require('sequelize')
const sequelize = require('../db')

const Event = sequelize.define('event', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  start_date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  end_date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: Sequelize.STRING
}, {
  tableName: 'events',
  timestamps: false
})

module.exports = Event
