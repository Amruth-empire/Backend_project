const multer =require('multer');
const path =require('path');
const crypto= require('crypto');


const storage = multer.diskStorage({
    destination: function (req, file, cb) { //settinf the folder for file
      cb(null, './public/images/uploads')
    },
    filename: function (req, file, cb) { //setting the filename
        crypto.randomBytes(12,(err,name)=>{
            const fn =name.toString("hex")+path.extname(file.originalname);
            cb(null, fn);

        })
    }
  })
  const upload = multer({ storage: storage })
module.exports=upload;