const admincontroller = require('../controllers/AdminController');
const express = require('express'); 
const adminrouter = express.Router();

adminrouter.post('/register',admincontroller.adminregister);

module.exports = adminrouter;
