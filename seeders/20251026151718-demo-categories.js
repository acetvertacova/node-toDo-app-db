'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Categories', [
    { name: 'Work', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Personal', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Shopping', createdAt: new Date(), updatedAt: new Date() },
  ], {});
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Categories', null, {});
}
