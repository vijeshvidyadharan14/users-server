require('dotenv').config()
const express = require('express') 
const cors = require('cors')
const router = require('./router/router')
require('./config/connection')

const userServer = express()

userServer.use(cors())
userServer.use(express.json())
userServer.use(router)

const PORT = 8080 

userServer.listen(PORT,() => { 
    console.log(`Server started at port :`, PORT);
 })

 userServer.get('/', (req,res) => {
    res.status(200).send(`<h1 style = "color:black"> HI.. PFServer Started!!</h1>`)
 })
