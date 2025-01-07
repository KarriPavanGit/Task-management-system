const Task = require('../models/Task');
const User = require('../models/User');

// Add task
const addTask = async (request, response) => {
    try {
        const input = request.body;      
        const task = new Task(input);
        await task.save();
        return response.status(201).json(task);
    } catch (err) {
        console.error("Error adding task:", err);
        return response.status(500).send(err.message);
    }
};

// Delete task
const deleteTask = async (request, response) => {
    try {
        const taskId = request.params.id;
        const task = await Task.findOneAndDelete({ '_id': taskId });
        
        if (!task) {
            return response.status(404).send("Task not found");
        }
        console.log(`Task with ID ${taskId} deleted`);

        return response.status(204).send("Deleted Successfully");
    } catch (err) {
        console.error("Error deleting task:", err);
        return response.status(500).send(err.message);
    }
};

// Update task
const updateTask = async (request, response) => {
    try {
        const taskId = request.params.id;
        const input = request.body;

        if (Object.keys(input).length === 0) {
            return response.status(400).send("No fields to update");
        }

        const updatedTask = await Task.findOneAndUpdate(
            { '_id': taskId },
            { $set: input },
            { new: true }
        );

        if (!updatedTask) {
            return response.status(404).send("Task not found");
        }
        
        return response.status(200).json(updatedTask);
    } catch (err) {
        console.error("Error updating task:", err);
        return response.status(500).send(err.message);
    }
};

// View all tasks
const viewAllTasks = async (request, response) => {
    try {
        const { email } = request.params;
        const user = await User.findOne({ email });

        if (!user) {
            return response.status(404).send("User not found");
        }

        const allTasks = await Task.find({ user: user._id });

        return response.status(200).json(allTasks);
    } catch (err) {
        console.error("Error retrieving tasks:", err);
        return response.status(500).send(err.message);
    }
};

module.exports = { addTask, deleteTask, updateTask, viewAllTasks };
