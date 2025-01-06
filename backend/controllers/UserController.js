const User = require('../models/User');
const bcrypt = require('bcrypt');

const addUser = async (req, res) => {
    try {
        const { username, email, password, fullname, phonenumber } = req.body;
        const emailExists = await User.findOne({ email }); 
        const usernameExists = await User.findOne({ username }); 
        if (usernameExists) {
            return res.status(409).send("Username already exists");
        }
        if (emailExists) {
            return res.status(409).send("Email already exists");
        }
        const hashedPassword = await bcrypt.hash(password, 10); 
        const user = new User({ username, email, password: hashedPassword, fullname, phonenumber });
        await user.save();
        return res.status(201).json(user);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

const viewAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');  
        if (users.length === 0) {
            return res.status(404).send("No users found");
        }
        return res.status(200).json(users); 
    } catch (err) {
        res.status(400).send(err.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send("User not found");
        }
        await User.deleteOne({ email }); 
        return res.status(200).send("User deleted successfully");
    } catch (err) {
        res.status(400).send(err.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send("User not found");
        }
        const hashedPassword = password ? await bcrypt.hash(password, 10) : user.password;
        const updatedUser = await User.findOneAndUpdate(
            { email }, 
            { fullname, password: hashedPassword }, 
            { new: true }
        ).select('-password');  // Exclude password from the response
        return res.status(200).json(updatedUser); 
    } catch (err) {
        res.status(400).send(err.message);
    }
};

module.exports = { addUser, viewAllUsers, deleteUser, updateUser };
