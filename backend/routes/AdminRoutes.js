const admincontroller = require('../controllers/AdminController');
const express = require('express'); 
const adminrouter = express.Router();

adminrouter.post('/admin/checkadminlogin', admincontroller.checkadminlogin);

module.exports = adminrouter;
