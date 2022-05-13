'use stric';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Tasks',
  [
    {
      userId: 1,
      status: 'done',
      description: 'configurar ambiente de desenvolvimento na máquina nova',
      title: 'Trabalho',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    {
      userId: 1,
      status: 'progress',
      description: 'planejar rotas da api para o projeto',
      title: 'Projeto Task Manager',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    {
      userId: 1,
      status: 'pending',
      description: 'Reunião com a equipe',
      title: 'Trabalho',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    {
      userId: 2,
      status: 'progress',
      description: 'ler o livro código limpo',
      title: 'Estudos',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    {
      userId: 3,
      status: 'pending',
      description: 'fazer o code review da PR #13 feita por ciclano',
      title: 'Trabalho',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
    },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Tasks', null, {}),
};
