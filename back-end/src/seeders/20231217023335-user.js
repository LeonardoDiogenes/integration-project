'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'johnpassword',
        photo: 'https://example.com/john.jpg',
        addressId: 1,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'janepassword',
        photo: 'https://example.com/jane.jpg',
        addressId: 2,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leo Diógenes',
        email: 'leo@example.com',
        password: '12345678',
        photo: 'https://example.com/leo.jpg',
        addressId: 3,
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: 'alicepassword',
        photo: 'https://example.com/alice.jpg',
        addressId: 4,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bob Wilson',
        email: 'bob.wilson@example.com',
        password: 'bobpassword',
        photo: 'https://example.com/bob.jpg',
        addressId: 5,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
