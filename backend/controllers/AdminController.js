const Admin = require('../models/Admin')
const User = require('../models/User')
const bcrypt=require('bcrypt')

const adminregister = async (request, response) => {
  try {
    const { fullname, username, email, password, phonenumber } = request.body;

    const adminExists = await Admin.findOne({ 
      $or: [{ username }, { email }, { phonenumber }] 
    });

    if (adminExists) {
      let existingField = '';
      if (adminExists.username === username) existingField = 'Username';
      else if (adminExists.email === email) existingField = 'Email';
      else existingField = 'Phone number';
      
      return response.status(400).json({ message: `${existingField} already exists` });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ fullname, username, email, password: hashedPassword, phonenumber });
    
    await admin.save();
    return response.status(201).json({ message: "Registration successful", admin });
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

module.exports = { adminregister };
