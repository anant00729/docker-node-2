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
_r.post('/insertAllArticles', _a_c.insertAllArticles)
_r.post('/uploadImageForArticles', upload.single('image') ,  _a_c.uploadImageForArticles)



module.exports = _r

