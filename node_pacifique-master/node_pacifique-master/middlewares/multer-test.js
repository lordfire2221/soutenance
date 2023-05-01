const multer = require('multer');

const MIME_TYPES = {
    'image/jpg':'jpg',
    'image/jpeg':'jpg',
    'image/png':'png',
}
const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'images');
    },
    filename:(req,file,callback)=>{
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null,name+Date.now()+'.'+extension)
    }
});
// const storage = multer.memoryStorage();
// const upload = multer({storage:storage});
// const uploadFile = (req,res,next) =>{
//   upload.single('file')(req,res,(err)=>{
//     if(err instanceof multer.MulterError){
//       return res.status(400).json({success:false,message:"Une erreur est survenue"})
//     }else if(err){
//       return res.status(400).json({success:false,message:'une erreur estsurvenue'})
//     }
//     next();
//   })
// }

module.exports = multer({storage: storage}).single('file');