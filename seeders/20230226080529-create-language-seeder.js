'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Languages', [{
      name: 'Korean',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'English',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Languages', { name: ['Korean', 'English'] })
  }
}
