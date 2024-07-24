const jwt = require('jsonwebtoken');
const User = require('../models/user');
async function requireAuth(req, res, next) {
    try{
    // read the token from cookie
        const token  =  req.cookies.Authorization
        // decode the token
        const decoded = jwt.verify(token,process.env.NOT_THE_KEY) 
        // check the expiration date of the cookie
        if (Date.now() > decoded.exp) return res.sendStatus(401)
        // find the user
        const user = await User.findById(decoded.sub);
        if (!user) return res.sendStatus(401);
        // attach  to the req 
        req.user = user;
        // continue after the middle\ware
        next();
    }catch(err){
        return res.sendStatus(401)
    }
}
module.exports = requireAuth