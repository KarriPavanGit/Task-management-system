import React, { useState } from 'react';
import axios from 'axios';

const AddTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Medium',
    status: 'Pending',
    user: sessionStorage.getItem('email'),
    notes: []
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleNotesChange = (e) => {
    setTask({ ...task, notes: e.target.value.split(',') });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/tasks/addTask', task); // Adjust URL if needed
      alert('Task added successfully!');
      console.log(response.data);
      setTask({
        title: '',
        description: '',
        dueDate: '',
        priority: 'Medium',
        status: 'Pending',
        user: sessionStorage.getItem('email'),
        notes: []
      });
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Failed to add task.');
    }
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={task.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Priority:</label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label>Status:</label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div>
          <label>Notes (comma-separated):</label>
          <input
            type="text"
            name="notes"
            value={task.notes.join(',')}
            onChange={handleNotesChange}
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
