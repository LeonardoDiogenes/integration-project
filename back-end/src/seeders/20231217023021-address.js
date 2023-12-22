'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Addresses', [
      {
        city: 'São Paulo',
        state: 'SP',
        country: 'Brasil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Natal',
        state: 'RN',
        country: 'Brasil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'João Pessoa',
        state: 'PB',
        country: 'Brasil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Londrina',
        state: 'PR',
        country: 'Brasil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Rio de Janeiro',
        state: 'RJ',
        country: 'Brazil',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};
