// ENV VARIABLES
// kB0FU403rNPoXoDf 
// medhatjachour8
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
// import dependencies 
const express = require('express');
const connectToDb = require('./config/connectToDb');
const cookieParser = require('cookie-parser')
const noteControllers = require('./controllers/notesControllers');
const usersControllers = require('./controllers/usersControllers');
const clientsControllers = require('./controllers/clientsControllers');
const categoriesControllers = require('./controllers/categoriesControllers');
const productControllers = require('./controllers/productControllers');
const requireAuth = require('./middleware/requireAut');
// create and express app
const app = express();
const cors = require('cors')
app.use(cookieParser())
// configure express app
app.use(express.json()); //make the app read  the json of the body
app.use(express.urlencoded({ extended:false})) // make the app read form field
app.use(cors(
    {
        origin: true,
        credentials:true ,
    }
))
// connect to database
connectToDb()

// routing  https://mongoosejs.com/docs/queries.html
// main //
app.get('/', (req, res) => {
    res.json({hello: 'world'});

})
//  log users //
// signup
app.post('/getup',usersControllers.signup)
// login
app.post('/getIn',usersControllers.login)
// logout 
app.get('/getOut',usersControllers.logout)
// middleware//
// before go to the usersControllers.checkAuth we gonna check requireAuth // and that's the middleware
//  we can say that it's a door and u need to have the correct key to match the lock and get in
app.get('/check_authU',requireAuth,usersControllers.checkAuth)
//  log clients //
// signup
app.post('/signup',clientsControllers.signup)
// login
app.post('/login',clientsControllers.login)
// logout 
app.get('/logout',clientsControllers.logout)
// middleware//
// before go to the clientsControllers.checkAuth we gonna check requireAuth // and that's the middleware
//  we can say that it's a door and u need to have the correct key to match the lock and get in
// app.get('/check_auth',requireAuth,clientsControllers.checkAuth)
// categories
// get all 
app.get('/categories',  categoriesControllers.getall)
// get one 
app.get('/category/:id', categoriesControllers.getCategory)
// post
app.post('/addCategory',categoriesControllers.addCategory)
// update 
app.put('/category/:id', categoriesControllers.updateCategory)
// get one 
app.delete('/category/:id',categoriesControllers.deleteCategory)

// Products //
// get all 
app.get('/products',  productControllers.getall)
// get one 
app.get('/products/:id', productControllers.getProduct)
// post
app.post('/addProduct',productControllers.addProduct)
// update 
app.put('/updateProduct/:id', productControllers.updateProduct)
// get one 
app.delete('/deleteProduct/:id',productControllers.deleteProduct)
// get all 
app.get('/notes',  productControllers.getall)
// get one 
app.get('/notes/:id', noteControllers.getNote)
// post
app.post('/addNote',noteControllers.addNote)
// update 
app.put('/updateNoe/:id', noteControllers.updateNote)
// get one 
app.delete('/DeleteNoe/:id',noteControllers.deleteNote)


app.listen(process.env.PORT);