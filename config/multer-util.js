const multer = require('multer');
var fs = require('fs')
var shell = require('shelljs');

let _d = {}
_d.checkFolders = function (dir) {
  if (!fs.existsSync(dir)){
      shell.mkdir('-p', dir);
  }
}




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
      // let arr = file.originalname.split('.')
      // let i = arr.length - 1
      // let ext = arr[i]
      cb(null, `${req.body.name}.png`)
    }
});




module.exports = multer({storage: storage});
