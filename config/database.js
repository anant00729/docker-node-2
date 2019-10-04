const Sequelize = require('sequelize')


// const _p = new Pool({
//     user : 'postgres',
//     password : '123123123',
//     host : 'localhost',
//     port : 5432,
//     database : 'quonquer'
// })


module.exports = new Sequelize('codinggigs', 'postgres', 'password', {
    host: 'db',
    dialect: 'postgres',
    operatorsAlias : false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      
});
