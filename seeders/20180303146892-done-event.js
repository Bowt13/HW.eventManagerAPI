'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('events', [{
    title: "Done event",
    start_date: "01-01-2018",
    end_date: "01-01-2018",
    description: "This event has finished."
    }], {})
  },

  down: (queryInterface, Sequelize) => {
 return queryInterface.bulkDelete('events', null, {})
  }
};
