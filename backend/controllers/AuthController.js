const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Adjust path as needed
const Admin = require('../models/Admin');

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });
        let role = 'user';

        if (!user) {
            user = await Admin.findOne({ email });
            if (user) {
                role = 'admin';
            }
        }

        if (!user) {
            return res.status(401).send("Invalid email or password");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send("Invalid email or password");
        }

        const token = jwt.sign(
            { id: user._id, role }, 
            process.env.JWT_SECRET_KEY, 
            { expiresIn: '1h' }
        );

        res.status(200).json({ token, message: 'Login successful' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { loginUser };
