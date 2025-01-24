const AppConfig=require('./configs/app_configs')
const DbConfig=require('./configs/db_configs')
const express=require('express')
const mongoose=require("mongoose")
const cors=require('cors')
const bodyParser=require('body-parser')
const app=express()
require("dotenv").config()


//middleware for converting js objects into json
app.use(bodyParser.json())
app.use(cors())

//connection to DB:
 mongoose.connect(DbConfig.Db_URL)
 const db=mongoose.connection
 db.on('error',()=>{
    console.log('error while connecting to db')
 })
 db.once('open',()=>{
    console.log('connected to database')
 })

//connection to server:
app.listen(AppConfig.PORT,()=>{
    console.log('server started on Port:',AppConfig.PORT)
})
