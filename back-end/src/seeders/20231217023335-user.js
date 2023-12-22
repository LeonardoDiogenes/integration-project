'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'johnpassword',
        photo: 'https://example.com/john.jpg',
        address_id: 1,
        is_admin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'janepassword',
        photo: 'https://example.com/jane.jpg',
        address_id: 2,
        is_admin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leo Diógenes',
        email: 'leo@example.com',
        password: '12345678',
        photo: 'https://example.com/leo.jpg',
        address_id: 3,
        is_admin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: 'alicepassword',
        photo: 'https://example.com/alice.jpg',
        address_id: 4,
        is_admin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bob Wilson',
        email: 'bob.wilson@example.com',
        password: 'bobpassword',
        photo: 'https://example.com/bob.jpg',
        address_id: 5,
        is_admin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
