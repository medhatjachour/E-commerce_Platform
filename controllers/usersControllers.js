const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function  signup(req, res) {
    try {
        // get dat a from body 
        const {email, password, userType} = req.body;
        // hash the email and password
        const hashedPassword =  bcrypt.hashSync(password, 8);
        // create a new user
        const the_user = await User.create({email, password: hashedPassword ,userType})
        if (!the_user){
            return res.status(404).json({message:"User not found"})
        }
        // respond 
        res.sendStatus(200);
    }catch (err) {
        res.status(500).json({message:"server issues"})
    }
}

async function login(req, res) {
    try {
        // get dat a from body 
        const email = req.body.email; 
        const password = req.body.password; 
        // find the user
        const theUser = await User.findOne({ email: email})
        if (!theUser) {
            return res.status(401).json({ message:"email doesn't exist"});
        }
        // compare password
        const passwordMatched = bcrypt.compareSync(password, theUser.password); 
        if (!passwordMatched) {
            return res.status(401).json({ message:"password doesn't match"});
        }
        // create token
        const exp = Date.now() + 1000 * 3600 * 24 * 30// the expiration token
        const token = jwt.sign({ sub: theUser._id, exp }, process.env.NOT_THE_KEY);
        // set the cookie
        res.cookie('Authorization',token,{
            expires: new Date(exp),
            httpOnly: true,
            sameSite:'lax',
            secure: process.env.NODE_ENV !== 'production',
        })
        // send the token 
        // res.json({token: token});
        res.sendStatus(200)
    }catch (e){
        console.log(e);
        res.status(500).json({message:"server issues"})
    }
}
async function logout(req, res) {
    try {
    res.clearCookie("Authorization")
    res.sendStatus(200)
    }catch (e){
        console.log(e);
    }
}
async function checkAuth(req, res) {
    try {
        console.log(req.user);
        res.sendStatus(200)
    }catch (e){
        console.log(e);
    }
}
module.exports ={
    signup,
    login: login,
    logout:logout,
    checkAuth
}