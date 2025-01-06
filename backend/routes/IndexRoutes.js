const indexcontroller=require('../controllers/AuthController')
const express=require('express')
const indexrouter=express.Router()

indexrouter.post('/login',indexcontroller.loginUser)

module.exports=indexrouter;
