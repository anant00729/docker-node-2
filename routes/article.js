const express = require('express')
const _a_c = require('../controllers/article')



const _r = express.Router()
_r.get('/getAllArticles', _a_c.getAllArticles)
_r.post('/insertAllArticles', _a_c.insertAllArticles)



module.exports = _r

