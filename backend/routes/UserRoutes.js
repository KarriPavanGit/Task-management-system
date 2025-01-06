const userController = require('../controllers/UserController');
const express = require('express'); 
const userRoutes = express.Router(); 

userRoutes.post('/add', userController.addUser);
userRoutes.delete('/delete/:email', userController.deleteUser);
userRoutes.put('/update', userController.updateUser);
userRoutes.get('/viewall', userController.viewAllUsers);

module.exports = userRoutes;
