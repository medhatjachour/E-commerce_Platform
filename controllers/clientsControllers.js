const Client = require('../models/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function  signup(req, res) {
    try {
        // get dat a from body 
        const {firstName, lastName, email, password, phone, address, shippingAddress} = req.body;
        // hash the email and password
        const hashedPassword =  bcrypt.hashSync(password, 8);
        // create a new user
        await Client.create({firstName, lastName, email, password:hashedPassword, phone, address, shippingAddress})
        // respond 
        res.sendStatus(200);
    }catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

async function login(req, res) {
    try {
        // get dat a from body 
        const email = req.body.email; 
        const password = req.body.password; 
        // find the user
        const theUser = await Client.findOne({ email: email})
        if (!theUser) {res.sendStatus(401)}
        // compare password
        const passwordMatched = bcrypt.compareSync(password, theUser.password); 
        if (!passwordMatched) {res.sendStatus(401)}
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