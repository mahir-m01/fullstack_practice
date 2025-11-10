const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET; 

function authenticateToken(req, res, next) {
   const authHeader = req.headers['authorization']
   if(!authHeader || !authHeader.startsWith('Bearer')){
      return res.status(401).json({ "error": "No token provided" })
   }
   const token = authHeader.split(' ')[1]
   jwt.verify(token,JWT_SECRET,(error,decoded)=>{
      if(error){
         return res.status(403).json({ "error": "Invalid or expired token"})  
      }
      req.user = decoded
   })
   next();
}

module.exports = authenticateToken;