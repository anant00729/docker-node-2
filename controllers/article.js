const  Article = require('../models/Article')
const { Op } = require('sequelize')

 exports.getAllArticles = async (req,res) => {
    Article.findAll()
    .then((res_d)=> {
        res.json(res_d)
    })
    .catch((err)=> {
        res.json(err.message)
    })
 }


 exports.insertAllArticles = async (req,res) => {
    Article.findAll()
    .then((res_d)=> {
        res.json(res_d)
    })
    .catch((err)=> {
        res.json(err.message)
    })
 }



 exports.uploadImageForArticles = async(req,res) => {
    res.json(req.file.filename)
 }

