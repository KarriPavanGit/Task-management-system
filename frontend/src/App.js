import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AddUser from './components/Users/AddUser';
import DeleteUser from './components/Users/DeleteUser';
import UpdateUser from './components/Users/UpdateUser';
import ViewAllUsers from './components/Users/ViewAllUsers';
import AdminHome from './components/Admin/AdminHome';
import AddTask from './components/Tasks/AddTask';
import ViewAllTasks from './components/Tasks/ViewAllTasks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/adduser' element={<AddUser/>} />
        <Route path='/deleteuser' element={<DeleteUser/>} />
        <Route path='/updateuser' element={<UpdateUser/>} />
        <Route path='/viewallusers' element={<ViewAllUsers/>} />

        <Route path='/adminhome' element={<AdminHome/>} />

        <Route path='/addtask' element={<AddTask/>} />
        <Route path='/viewalltasks' element={<ViewAllTasks/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
