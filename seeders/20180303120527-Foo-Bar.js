'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('events', [{
    title: "Fu-barBaby",
    start_date: "20-04-2018",
    end_date: "21-04-2018",
    description: "Git fubar."
    }], {})
  },

  down: (queryInterface, Sequelize) => {
 return queryInterface.bulkDelete('events', null, {})
  }
};
