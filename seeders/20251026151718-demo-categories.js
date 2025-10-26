'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Categories', [
    { name: 'Work', created_at: new Date(), updated_at: new Date() },
    { name: 'Personal', created_at: new Date(), updated_at: new Date() },
    { name: 'Shopping', created_at: new Date(), updated_at: new Date() },
  ], {});
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Categories', null, {});
}
