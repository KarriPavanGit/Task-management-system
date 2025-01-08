const userController = require('../controllers/UserController');
const express = require('express'); 
const userRouter = express.Router(); 

userRouter.post('/add', userController.addUser);
userRouter.delete('/delete/:email', userController.deleteUser);
userRouter.put('/update', userController.updateUser);
userRouter.get('/viewall', userController.viewAllUsers);

module.exports = userRouter;
