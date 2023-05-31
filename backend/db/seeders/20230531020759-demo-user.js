'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        fullName: 'Tom Con',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        fullName: 'Ron Swan',
        email: 'demo2@user.io',
        hashedPassword: bcrypt.hashSync('password'),
      },
      { 
        fullName: 'Don Jon',
        email: 'demo3@user.io',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      email: { [Op.in]: ['demo@user.io', 'demo2@user.io', 'demo3@user.io'] }
    }, {});
  }
};