'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [{
      username: "john",
      password: "123",
      email: "johnmail@com",
      fullname: "John Doe",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: "sam",
      password: "123",
      email: "sammail@com",
      fullname: "sam Doe",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: "due",
      password: "123",
      email: "duemail@com",
      fullname: "Due Doe",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", null, {})
  }
};
