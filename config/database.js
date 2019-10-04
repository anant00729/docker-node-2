const Sequelize = require('sequelize')


module.exports = new Sequelize('codinggig', 'postgres', '123123123', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAlias : false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
});
