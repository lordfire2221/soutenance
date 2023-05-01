const multer = require('multer');


const storage = multer.memoryStorage();
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