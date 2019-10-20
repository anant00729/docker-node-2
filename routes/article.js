const express = require('express')
const _a_c = require('../controllers/article')

const multer = require('multer');


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
});
var upload = multer({storage: storage});





const _r = express.Router()
_r.get('/getAllArticles', _a_c.getAllArticles)
_r.post('/getSingleArticles', _a_c.getSingleArticles)
_r.post('/insertAllArticles', _a_c.insertAllArticles)
_r.post('/updateArticlesTemplate', _a_c.updateArticlesTemplate)
_r.post('/instert100Articles', _a_c.instert100Articles)
_r.post('/insertSingleArticle', _a_c.insertSingleArticle)
_r.post('/uploadImageForArticles', upload.single('image') ,  _a_c.uploadImageForArticles)



module.exports = _r

