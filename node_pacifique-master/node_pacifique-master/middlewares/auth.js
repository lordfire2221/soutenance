const jwt = require('jsonwebtoken');
 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, "azerty@1234567890$$");
       const userId = decodedToken.userId;
       const role = decodedToken.role;
       req.auth = {
        userId: userId,
        role: role,
    };
	next();
   } catch(error) {
       res.json({ message:"Votre session est expirée.",status:0 });
   }
};