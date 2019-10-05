const express = require('express')
const _a_c = require('../controllers/auth/user')

// const multer = require('multer');


// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'public/images')
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.originalname)
//     }
// });
// var upload = multer({storage: storage});





const _r = express.Router()
_r.post('/register', _a_c.register)
_r.post('/login', _a_c.login)
_r.get('/truncateAll', _a_c.truncateAll) 
_r.post('/logout', _a_c.logout) 
// _r.post('/insertAllArticles', _a_c.insertAllArticles)
// _r.post('/uploadImageForArticles', upload.single('image') ,  _a_c.uploadImageForArticles)



module.exports = _r
