import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); // Track task being edited
  const [updatedTask, setUpdatedTask] = useState({ title: '', description: '', priority: '', status: '', notes: '' });
  const email = sessionStorage.getItem('email');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/tasks/viewalltasks/${email}`);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    if (email) {
      fetchTasks();
    }
  }, [email]);

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/deleteTask/${taskId}`);
      setTasks(tasks.filter(task => task._id !== taskId)); // Remove the deleted task from the list
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleUpdate = (taskId) => {
    const taskToEdit = tasks.find(task => task._id === taskId);
    setEditingTask(taskId);
    setUpdatedTask({ ...taskToEdit }); // Pre-populate the form with the current task details
  };

  const handleSaveUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/tasks/updateTask/${editingTask}`, updatedTask);
      setTasks(tasks.map(task => (task._id === editingTask ? response.data : task))); // Update the task in the list
      setEditingTask(null); // Close the edit form
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleCancelUpdate = () => {
    setEditingTask(null); // Close the edit form without saving
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>All Tasks for {email}</h2>
      {tasks.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task._id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
                <td>{task.notes.join(', ')}</td>
                <td>
                  <button onClick={() => handleUpdate(task._id)}>Update</button>
                  <button onClick={() => handleDelete(task._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No tasks found.</p>
      )}

      {editingTask && (
        <div>
          <h3>Edit Task</h3>
          <form>
            <label>Title:
              <input
                type="text"
                name="title"
                value={updatedTask.title}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>Description:
              <input
                type="text"
                name="description"
                value={updatedTask.description}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>Priority:
              <select
                name="priority"
                value={updatedTask.priority}
                onChange={handleChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>
            <br />
            <label>Status:
              <select
                name="status"
                value={updatedTask.status}
                onChange={handleChange}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </label>
            <br />
            <label>Notes:
              <input
                type="text"
                name="notes"
                value={updatedTask.notes}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="button" onClick={handleSaveUpdate}>Save</button>
            <button type="button" onClick={handleCancelUpdate}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ViewAllTasks;
