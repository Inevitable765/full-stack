const express = require('express') ;
const colors = require("colors")
const app = express() ;
const PORT = 3000 ;
const dbConnect = require('./db');
const errorHandler=require('./middleware/errorhandler');
require('dotenv').config()
const cors=require('cors');
const passport = require('passport');
const session=require(
'express-session'
)
//parse the data from the req.body
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
dbConnect()

app.use(session({
    secret:'my-secret-String',
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:1000**60*60*24*5}
}))






app.use('/api',require('./routes/userRoutes'))
app.use((req,res,next)=>{
    res.status(404).send(`request url ${req.url}not found`)
    next()
})
app.use(errorHandler);


app.listen(PORT , ()=>{
    console.log(colors.yellow(`App is listening on the PORT:${PORT}`))
})