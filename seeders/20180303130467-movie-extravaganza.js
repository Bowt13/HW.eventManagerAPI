'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('events', [{
    title: "Movie Extravaganza",
    start_date: "08-04-2018",
    end_date: "20-04-2018",
    description: "Movie watching for days."
    }], {})
  },

  down: (queryInterface, Sequelize) => {
 return queryInterface.bulkDelete('events', null, {})
  }
};
