const taskcontroller=require('../controllers/TaskController')
const express=require('express')

const taskrouter=express.Router()


taskrouter.post('/addTask',taskcontroller.addTask)
taskrouter.delete('/deleteTask/:id',taskcontroller.deleteTask)
taskrouter.put('/updateTask/:id',taskcontroller.updateTask)
taskrouter.get('/viewalltasks/:email',taskcontroller.viewAllTasks)

module.exports=taskrouter;