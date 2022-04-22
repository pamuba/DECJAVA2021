const express = require('express')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose');

//express app
const app = express()

//specify the body parser
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 3000

//Connection Code 
const uri = process.env.URI;
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB database connection estalished successfully")
})

//Routes
const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

//localhost:5000/exercises
app.use('/exercises', exercisesRouter)
//localhost:5000/users
app.use('/users', usersRouter)

//start the server
app.listen(port, (err)=> {
    if(!err)
        console.log(`Server running on port: ${port}`)
    else 
        console.log(err.message)
})
