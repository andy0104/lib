'use strict';
const { uuid } = require('uuidv4');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('Genre', {
        genreId: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false
        },
        genreName: {
          type: Sequelize.STRING(200),
          allowNull: false
        },
        genreStatus: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        createdDate: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedDate: {
          type: Sequelize.DATE,
          allowNull: true
        }
      });
      await transaction.commit();
    } catch (e) {
      console.error(e);
      await transaction.rollback();
      throw e;
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Genre');
  }
};
