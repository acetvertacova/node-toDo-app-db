'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Todos', [
    {
      title: 'Finish project report',
      completed: false,
      category_id: 1, // assuming 'Work' category exists
      due_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Buy groceries',
      completed: false,
      category_id: 3, // assuming 'Shopping' category exists
      due_date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // tomorrow
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Go to the gym',
      completed: true,
      category_id: 4, // assuming 'Health' category exists
      due_date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // yesterday
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Todos', null, {});
}
