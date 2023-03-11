'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Languages', [{
      name: '韓文',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: '英文',
      created_at: new Date(),
      updated_at: new Date()
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Languages', { name: ['Korean', 'English'] })
  }
}
