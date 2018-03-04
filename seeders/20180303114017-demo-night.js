'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('events', [{
    title: "Demo night",
    start_date: "08-06-2018",
    end_date: "09-06-2018",
    description: "Demo night to show of your stuff."
    }], {})
  },

  down: (queryInterface, Sequelize) => {
 return queryInterface.bulkDelete('events', null, {})
  }
};
