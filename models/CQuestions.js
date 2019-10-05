const Sequelize = require('sequelize')
const db = require('../config/database')



const CQuestions = db.define('CQuestions', {
    question : {
        type : Sequelize.STRING
    },
    clap : {
        type : Sequelize.STRING
    },
    qColor : {
        type : Sequelize.STRING
    },
    isActive : {
        type : Sequelize.STRING
    },
    userId : {
        type : Sequelize.STRING
    }
})



module.exports = CQuestions
