'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        username: 'fulano',
        email: 'fulano@gmail.com',
        password: 'ZnVsYW5vX3Bhc3N3b3Jk', // fulano_password
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        username: 'ciclano',
        email: 'ciclano@gmail.com',
        password: 'Y2ljbGFub19wYXNzd29yZA==', // ciclano_password
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        username: 'beltrano',
        email: 'beltrano@gmail.com',
        password: 'YmVsdHJhbm9fcGFzc3dvcmQ=', // beltrano_password
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
