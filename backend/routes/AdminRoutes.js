const admincontroller = require('../controllers/AdminController')
const express= require("express")

const adminrouter = express.Router();

adminrouter.post('/checkadminlogin',admincontroller.checkadminlogin);
