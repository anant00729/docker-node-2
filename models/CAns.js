const Sequelize = require('sequelize')
const db = require('../config/database')



const CAns = db.define('CAns', {
    answer : {
        type : Sequelize.STRING
    }, 
    userId : {
        type : Sequelize.STRING
    }, 
    isActive : {
        type : Sequelize.STRING
    }, 
    cq_id : {
        type : Sequelize.STRING
    }
})



module.exports = CAns
