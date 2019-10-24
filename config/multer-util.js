const multer = require('multer');
var fs = require('fs')
var shell = require('shelljs');

let _d = {}
_d.checkFolders = function (dir) {
  if (!fs.existsSync(dir)){
      shell.mkdir('-p', dir);
  }
}

_d.checkFolders('public/uploads/article')
_d.checkFolders('public/uploads/admin')


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const type = req.body.type
        let dir = ''
        if(type === 'article'){
          dir = 'public/uploads/article'
        }else if(type === 'author'){
          dir = 'public/uploads/admin'
        }
        _d.checkFolders(dir)
        cb(null, dir)
},
    filename: (req, file, cb) => {
      const type = req.body.type
        
        if(type === 'article'){
          dir = 'public/uploads/article'
          cb(null, `${file.originalname}`)
        }else if(type === 'author'){
          cb(null, `${req.body.name}.png`)
        }
      // let arr = file.originalname.split('.')
      // let i = arr.length - 1
      // let ext = arr[i]
      
    }
});




module.exports = multer({storage: storage});
